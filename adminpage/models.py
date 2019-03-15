from django.db import models

# Create your models here.

from  django.urls import  reverse
# Create your models here.
class User(models.Model):
    account=models.CharField(max_length=50)
    password=models.CharField(max_length=50)

    #备用模型
    exp1=models.CharField(max_length=50,null=True,blank=True)
    exp2=models.CharField(max_length=50,null=True,blank=True)


#管理员添加的公众号模型
class Official(models.Model):
    name=models.CharField(max_length=50)
    sort=models.CharField(max_length=50,null=True,blank=True)
    temp1 = models.CharField(max_length=50, null=True, blank=True)

class DownloadImg(models.Model):
    img_name = models.CharField(max_length=150, null=True)
    img=models.ImageField(upload_to='contentImg', max_length=255)


