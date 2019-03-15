from django.http import HttpResponse
from homepage.models import Post,Category

from tool.loadata import  LoadData
from tool.imgTool import LoadImg

from django.shortcuts import render,get_object_or_404

#添加缓存
from django.views.decorators.cache import cache_page
from django.core.cache import cache

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
# Create your views here.



#主页
def index(request):
    # x=LoadData()
    # x.DoneIt()
    #
    post_list= Post.objects.all().order_by('-pk')
    sort_list=Category.objects.all()
    
    return render(request, 'homepage/index.html', {"post_list": post_list,
                                                   'sort_list':sort_list})
def index2(request):

    a=Post.objects.all().order_by('-pk')[:10]
    return render(request, 'homepage/index2.html', {"post_list":a})



def showhomepage(request):
    #加载数据到数据库
    # x = LoadData()
    # x.DoneIt()
    #获得数据

    pension_list = Post.objects.filter(sort="养老").order_by('-pk')
    pension_list=get_six_item(pension_list)

    military_list = Post.objects.filter(sort="军事").order_by('-pk')
    military_list=get_six_item(military_list)

    entertainment_list = Post.objects.filter(sort="娱乐").order_by('-pk')
    entertainment_list = get_six_item(entertainment_list)

    technology_list = Post.objects.filter(sort="科技").order_by('-pk')
    technology_list = get_six_item(technology_list)

    study_list = Post.objects.filter(sort="学习").order_by('-pk')
    study_list = get_six_item(study_list)

    return render(request,'homepage/home.html',{"pension_list":pension_list,
                                                "military_list": military_list,
                                                "entertainment_list": entertainment_list,
                                                "technology_list": technology_list,
                                                "study_list": study_list,


                                                })

#展示各种类型的列表页面
@cache_page(60*5)
def showlist(request,sort):

    # x = LoadData()
    # x.DoneIt()
    # sort=get_object_or_404(Post,sort='养老'
    path_str=request.get_full_path()
    path_list=path_str.split('/')
    print("请求的url是:",request.get_full_path())


    # sort=path_list[1]

    sort_EN=sort
    sort_objects=Category.objects.get(sort_EN=sort_EN)
    a = Post.objects.filter(sort=sort_objects.sort).order_by('-pk')


    #尝试分页
    paginator = Paginator(a, 5)  # 每页显示 25 个联系人

    #获取url中的数据
    page = request.GET.get('page')
    try:
        contacts = paginator.page(page)
    except PageNotAnInteger:
        # 如果用户请求的页码号不是整数，显示第一页
        contacts = paginator.page(1)
    except EmptyPage:
        # 如果用户请求的页码号超过了最大页码号，显示最后一页
        contacts = paginator.page(paginator.num_pages)

    return render(request,'homepage/list.html',{"post_list":a,
                                                    'contacts':contacts

                                                })


#展示推送详细页面
#展示各种类型的列表页面
@cache_page(60*5)
def detail(request,sort,pk):
    # x = LoadData()
    # x.DoneIt()
    # 测试缓存
    # b = Category.objects.get(sort_EN=sort)
    # a=cache.get(pk)
    # if a == None:
    #     cache.set(pk, b)
    # else:
    #     print(a.sort)
    print('开始缓存视图')



    #获取全文样式
    x=LoadImg()
    post,content_html=x.Doit(pk)

    sort_EN = sort
    sort_objects = Category.objects.get(sort_EN=sort_EN)
    otherlink_list=Post.objects.filter(sort=sort_objects.sort).order_by('-publish_time')


    return render(request, 'homepage/info.html', {"body": post,

                                                     'content_html':content_html,
                                                  'otherlink_list':otherlink_list,

                                                  })


def searchSomething(request):
    something = request.POST['keyboard']
    print('要查询的是',something)
    print(something)
    a = Post.objects.filter(title__contains=something).order_by('-pk')
    # 尝试分页
    paginator = Paginator(a, 5)  # 每页显示 25 个联系人

    # 获取url中的数据
    page = request.GET.get('page')
    try:
        contacts = paginator.page(page)
    except PageNotAnInteger:
        # 如果用户请求的页码号不是整数，显示第一页
        contacts = paginator.page(1)
    except EmptyPage:
        # 如果用户请求的页码号超过了最大页码号，显示最后一页
        contacts = paginator.page(paginator.num_pages)

    return render(request, 'homepage/list.html', {"post_list": a,
                                                  'contacts': contacts

                                                  })





#列表工具函数
def  get_six_item(alist):
    alist=list(alist)
    if len(alist)<=6:
        return  alist

    else:
        return  alist[:6]