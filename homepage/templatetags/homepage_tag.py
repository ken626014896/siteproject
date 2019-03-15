
from homepage.models import Post,Category
import random
from django import template


register = template.Library()

@register.simple_tag
def get_sort():
    a=Category.objects.all()

    return a


#获得要推荐的推送
@register.simple_tag
def get_recommen():

    return Post.objects.all()[:3]



#获得要分享的推送
@register.simple_tag
def get_share():
    print('开始缓存模板tag')
    return Category.objects.all()[0:3]

#获得要滚屏的推送
# @register.simple_tag
# def get_scroll():
#     return Post.objects.all().order_by("-pk")[0:5]

#获得最新的推送
@register.simple_tag
def get_newest():
    return Post.objects.all().order_by("-pk")[0:1]