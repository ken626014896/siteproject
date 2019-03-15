from django.contrib import admin

# Register your models here.
from homepage.models import Post,Category

class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'describe', 'come_from', 'publish_time',
                    'author','sort']


admin.site.register(Post,PostAdmin)

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['sort','sort_EN']


admin.site.register(Category,CategoryAdmin)
