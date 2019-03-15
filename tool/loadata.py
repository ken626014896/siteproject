
from homepage.models import Post
import  json

class LoadData:

    def DoneIt(self):
      f = open("dataio.json", 'r', encoding='UTF-8')

      Post.objects.all().delete()
    # lists=json.load(f)
      for strline in f.readlines():
          strline = strline.strip('\n')
          # 将字符串转化成字典
          dictline = json.loads(strline)


          title = dictline["title"][0]
          come_from = dictline["come_from"][0]
          describe = dictline["describe"][0]
          publish_time = dictline["publish_time"][0]
          item_url = dictline["item_url"][0]
          page_url = dictline["page_url"][0]
          img_url = dictline["img_url"][0]

          author = dictline["author"][0]
          sort = dictline["sort"][0]
          img_url_list = dictline["img_url_list"]
          temp1=dictline["temp1"]
          temp2=dictline["temp2"]

          Post.objects.get_or_create(title=title,
                                     come_from=come_from,
                                     publish_time=publish_time,
                                     describe=describe,
                                     item_url=item_url,
                                     page_url=page_url,
                                     img_url=img_url,
                                     author=author,
                                     sort=sort,
                                     img_url_list=img_url_list,
                                     temp1=temp1,
                                     temp2=temp2
                                     )
      print("Done")
      f.close()

