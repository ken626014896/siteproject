from homepage.models import Post
from bs4 import BeautifulSoup

class LoadImg:

    def Doit(self,pk):
        #获取要展示的推送
        post=Post.objects.get(pk=pk)
        # 把列表形式的字符串变回列表
        html_list = eval(post.temp1)
        imgname_list = eval(post.temp2)

        if(len(imgname_list)==0):#说明文章是自己添加的

             test_html='<html><body>'+html_list[0]+'</body></html>'
             return  post,test_html
        soup = BeautifulSoup(html_list[0], 'lxml')
        # 此时原来的字符串多了<html><body>  </body></html>

        # tag_list=soup.find_all('div')
        # print(tag_list)

        imgtag_list = soup.find_all("img")

        for imgtag, imgname in zip(imgtag_list, imgname_list):
            soup2 = BeautifulSoup(str(imgtag), 'lxml')
            # 此时原来的字符串多了<html><body>  </body></html>

            # 替换图片url
            soup2.img.attrs['src'] = '/static/homepage/images/contentImg/' + imgname
            # soup2.img.attrs['src'] = "E:/python/wxproject/homepage/static/homepage/images/contentImg/"+ imgname

            # print(soup2.img)
            # 替换新的img标签
            imgtag.replace_with(soup2.img)
        # 去掉多余的<html><body>  </body></html>
        new_html = str(soup).replace('<html><body>', '').replace('</body></html>', '')

        # 更新数据
        post.temp1=[new_html]
        post.temp2=[]
        post.save()

        return  post,new_html
