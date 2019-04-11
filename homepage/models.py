from django.db import models
from  django.urls import  reverse
# Create your models here.
class Post(models.Model):
    #推送的标题
    title = models.CharField(max_length=50)
    #推送的内容的简述
    describe=models.CharField(max_length=250)
    #推送的来自的公众号
    come_from=models.CharField(max_length=50)
    #推送发送的时间
    publish_time=models.CharField(max_length=50)
    #公众号的地址
    page_url=models.CharField(max_length=250)
    # 推送的原文的地址
    item_url=models.CharField(max_length=250)
    #图片的地址
    img_url=models.CharField(max_length=250)


    author = models.CharField(max_length=50,null=True)
    sort = models.CharField(max_length=50, null=True)
    img_url_list = models.CharField(max_length=2500,null=True)
    context_list = models.CharField(max_length=2500,null=True)
    # 待定数据
    temp1 = models.TextField(max_length=5000,null=True)
    temp2 = models.TextField(max_length=5000,null=True)
    temp3 = models.CharField(max_length=250,null=True)

    #用于下载图片

    def get_absolute_url(self):
        a=Category.objects.get(sort=self.sort)

        return reverse('detail', kwargs={'pk': self.pk,'sort':a.sort_EN})

    



class Category (models.Model):
    sort = models.CharField(max_length=50)
    sort_EN = models.CharField(max_length=50,null=True,blank=True)
    temp2 = models.CharField(max_length=50,null=True,blank=True)
    temp3 = models.CharField(max_length=50,null=True,blank=True)

    def get_post(self):


        return  Post.objects.filter(sort=self.sort)[0:2]



    def get_sort_url(self):


        return reverse('Sort', kwargs={'sort':self.sort_EN})