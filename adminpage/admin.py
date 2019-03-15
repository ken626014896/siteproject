from django.contrib import admin
from adminpage.models import User,Official,DownloadImg

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ['account','password']




class OfficialAdmin(admin.ModelAdmin):
    list_display = ['name','sort']

class DownloadImgAdmin(admin.ModelAdmin):
    list_display = ['img_name','img']



admin.site.register(DownloadImg,DownloadImgAdmin)

admin.site.register(User,UserAdmin)

admin.site.register(Official,OfficialAdmin)