from django.shortcuts import render,redirect,HttpResponseRedirect,reverse
from django.http import HttpResponse,JsonResponse
from adminpage.models import User
#工具类加载
from tool.pachong import WechatSpider,Translation
import json
from django.core.exceptions import ObjectDoesNotExist

from adminpage.models import Official,DownloadImg
from homepage.models import Category,Post
# Create your views here.
import re

#导入验证登陆的装饰器
from tool.auth_login import is_login

def manage(request):
   if  request.session.get('is_login', None):
       return redirect('/function/')

   message='请按格式输入'
   if request.method == "POST":
      account = request.POST.get('account')
      password = request.POST.get('password')
      if account and password:  # 确保用户名和密码都不为空
         account = account.strip()
         # 用户名字符合法性验证
         # 密码长度验证
         # 更多的其它验证.....
         try:
            user = User.objects.get(account=account)
            if user.password == password:
               request.session['account'] = user.account
               request.session['is_login'] = True
               return redirect('/function/')
            else:
               message = "密码不正确！"
         except:
            message = "用户名不存在！"
         # return render(request, 'login/login.html', {"message": message})
   return render(request, 'adminpage/login.html', locals())


def logout(request):
   request.session.flush()
   # 或者使用下面的方法
   # del request.session['is_login']
   # del request.session['user_id']
   # del request.session['user_name']
   return redirect("/manage/")

@is_login
def function(request):

   #获取管理员姓名
   account=request.session.get('account')
   categorys=Category.objects.all()
   # 如果是ajax请求
   # 添加分类的请求操作
   if request.is_ajax():
      print('一次添加分类的ajax请求')
      sort = request.POST.get('sort')
      print(sort)
      #判断是否只有中文
      for c in sort:
         if not ('\u4e00' <= c <= '\u9fa5'):
            #如果不是只含有中文
            return HttpResponse('hasother')
      # 判断是否已经存在
      try:
         a=Category.objects.get(sort=sort)

         return HttpResponse('existed')

      except ObjectDoesNotExist:
            print("要添加的类别:%s" % sort)
            spider=Translation()
            sort_EN=spider.doit(sort)
            #获取类别的翻译
            Category.objects.get_or_create(sort=sort,sort_EN=sort_EN)
      return HttpResponse('ok')




   return  render(request,'adminpage/function.html',locals())


#搜索公众号
def  seachgzh(request):
   account = request.session.get('account')
   #如果是ajax请求
   #添加公众号的请求操作
   if request.is_ajax():
      print('一次ajax请求')
      databack=''
      wxname = request.POST.get('username')
      selected=request.POST.get('selected')

      if wxname:
         print("要录入库和爬虫的公众号:%s" % wxname)
         print('选择的分类:%s' % selected)
         Official.objects.get_or_create(name=wxname,sort=selected)
         databack.join(wxname).join(',').join(selected)

         #新添加的公众号爬一次



      else:
        print("null")


      return HttpResponse(databack)


   #搜索公众号的请求操作
   if request.method == "POST":
      #获取公众号分类
      categorys= Category.objects.all()

      gzhname = request.POST.get('gzhname')

      if gzhname:  # 确保公众号不为空
         print('要搜索的公众号:'+gzhname)
         spider=WechatSpider()


         wx_list=[]
         wx_list=spider.seachgzh(gzhname)
         if wx_list:
            hint=0
            for wx in wx_list:
               name=wx.get('name')
               if  Official.objects.filter(name=name):
                  wx_list[hint]['is_exist']=True
               hint=hint+1

            return render(request, 'adminpage/add.html', locals())
         else:
            #找不到公众号
            return render(request, 'adminpage/add.html', locals())


      else:
         #输入为空时
         wx_list = []
         return render(request, 'adminpage/add.html',locals())



#
@is_login
def addcontent(request):
   #发表文章的ajax请求

   if request.is_ajax():
      print('一次ajax请求')
      sort = request.POST.get('sort')

      files = request.FILES.get('fengmian')
      title=request.POST.get('title')
      author = request.POST.get('author')
      publish_time = request.POST.get('publish_time')
      come_from = request.POST.get('come_from')
      describe = request.POST.get('describe')
      sort = request.POST.get('sort')
      temp1 = request.POST.get('contents')
      temp2=[]
      time_list=publish_time.split('-')
      ptime='%s年%s月%s日'%(time_list[0],time_list[1],time_list[2])
      Post.objects.get_or_create(title=title,
                                 come_from=come_from,
                                 publish_time=publish_time,
                                 describe=describe,
                                 img_url=files.name,
                                 author=author,
                                 sort=sort,
                                 temp1=[temp1],
                                 temp2=temp2

                                 )
      DownloadImg.objects.get_or_create(img_name=files.name,img=files)
      return  JsonResponse({'msg':'ok'})

   else:
      account = request.session.get('account')
      categorys = Category.objects.all()


      return  render(request ,'adminpage/addcontent.html',locals())

#上传图片

def uploadimg(request):
   files = request.FILES.get('myFile')

   files_name=re.sub('[()\s]','', files.name)

   DownloadImg.objects.get_or_create(img_name=files_name, img=files)

   img_url=f"http://127.0.0.1:8000/static/homepage/images/contentImg/{files_name}"
   print(img_url)
   data_back={

    "errno": 0,


    "data": [
       img_url
    ]
     }

   return JsonResponse(data_back)