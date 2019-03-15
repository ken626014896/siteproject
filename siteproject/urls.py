"""wxproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,re_path
from homepage import views
from django.conf import settings
from adminpage import views as adminpageviews



urlpatterns = [



    path('admin/', admin.site.urls),

    #管理页面
    #登录
    path('manage/', adminpageviews.manage,name='manage'),
    #注销
    path('logout/',adminpageviews.logout,name='logout'),
    #功能页面
    path('function/', adminpageviews.function,name='function'),
    #增加公众号
    path('function/seachgzh/', adminpageviews.seachgzh,name='seachgzh'),


    #跳转发表页面和发表文章url
    path('function/addcontent/', adminpageviews.addcontent, name='addcontent'),

    #上传图片
     path('function/uploadimg/', adminpageviews.uploadimg,name='uploadimg'),







    #主页
    path('test/',views.index ,name="homepage2"),
    path('test2/',views.index2 ,name="homepage"),
    path('', views.index,name="test"),
    #查询
    path('search/', views.searchSomething ,name="search"),
    re_path(r'^(?P<sort>\w+)/(?P<pk>[0-9]+)/$', views.detail, name="detail"),

    #标签url
    re_path(r'^(?P<sort>\w+)/$', views.showlist, name="Sort"),

    #分类url
    path('pension/', views.showlist ,name="pension"),
    path('military/', views.showlist ,name="military"),
    path('entertainment/', views.showlist ,name="entertainment"),
    path('technology/', views.showlist ,name="technology"),
    path('study/', views.showlist ,name="study"),



]
