from  urllib   import request
from bs4 import  BeautifulSoup
import urllib.parse
import urllib3
import requests
class WechatSpider():
    urllib3.disable_warnings()
    def  seachgzh(self,name):

        urlname = urllib.parse.quote(name)
        # print(s)
        get_url = 'https://weixin.sogou.com/weixin?type=1&s_from=input&query=%s&ie=utf8&_sug_=n&_sug_type_=' % urlname

        head = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36',

        }
        #使用requests库爬取 速度快点
        req = requests.get(url=get_url, headers=head, verify=False)

        req.encoding = 'utf-8'
        html = req.text
        # bf = BeautifulSoup(html, 'lxml')
        # req = request.Request(url=get_url, headers=head)
        # response = request.urlopen(req)
        # req_html = response.read().decode('utf-8')
        # soup = BeautifulSoup(req_html, 'lxml')
        soup = BeautifulSoup(html, 'lxml')
        num_list=[0,1,2]
        wx_list=[]
        for num in num_list:

            atts_name='sogou_vr_11002301_box_'+str(num)
            # print(atts_name)
            wechat = soup.find_all(attrs={"id": atts_name})
            if not wechat:  #没有找到公众号时退出，返回空集
                print('没有找到公众号')
                return wx_list

            # print(wechat)
            soup1 = BeautifulSoup(str(wechat[0]), 'lxml')
            #找图片地址
            img_url_tag = soup1.find_all("img")
            # print(img_url_tag[0].attrs['src'])

            img_url = 'https:' + img_url_tag[0].attrs['src']
            # print(img_url)
            # 公众号名字
            name = soup1.find_all(attrs={"class": "tit"})
            temp_str = str(name[0].a).replace('<!--red_beg-->', '').replace('</em>', '').replace('<em>', '').replace(
                '<!--red_end-->', '')
            # print(temp_str)
            temp_str_soup = BeautifulSoup(temp_str, 'lxml')
            name = temp_str_soup.html.body.a.string
            # print(name)
            # 微信号
            wxaccount = soup1.find_all(attrs={"name": "em_weixinhao"})
            wxaccount = wxaccount[0].string
            # print(wxaccount)
            # 微信功能描述
            description = soup1.find_all('dl')
            description = description[0].dd
            description_str = str(description).replace('<!--red_beg-->', '').replace('</em>', '').replace('<em>','').replace('<!--red_end-->', '')
            description = BeautifulSoup(description_str, 'lxml')
            description=description.html.body.dd.string
            # print(description)

            wx_dict={'img_url':img_url,
                     'name':name,
                     'wxaccount':wxaccount,
                     'description':description,
                      'is_exist':None
                     }
            wx_list.append(wx_dict)
        return wx_list


    def  spidergzh(self,title,sort):
       pass


from urllib import request
from  urllib import  parse
import  json
#有道翻译类
class Translation():
    def doit(self,Words):
        url = 'http://fanyi.youdao.com/translate?smartresult=dict&smartresult=rule'
        # 以上两个url都可以
        # 创建Form_Data字典，存储上图的Form Data
        Form_Data = {}

        Form_Data['i'] = Words
        Form_Data['from'] = 'AUTO'
        Form_Data['to'] = 'AUTO'
        Form_Data['smartresult'] = 'dict'
        Form_Data['client'] = 'fanyideskweb'
        Form_Data['salt'] = '1540279118208'
        Form_Data['sign'] = '109c30ddf9c78d4bbbf2479a4324f366'
        Form_Data['doctype'] = 'json'
        Form_Data['version'] = '2.1'
        Form_Data['keyfrom'] = 'fanyi.web'
        Form_Data['action'] = 'FY_BY_REALTIME'
        Form_Data['typoResult'] = 'false'
        # 使用urlencode方法转换标准格式
        data = parse.urlencode(Form_Data).encode('utf-8')
        # 传递Request对象和转换完格式的数据
        response = request.urlopen(url, data)

        # 读取信息并解码
        html = response.read().decode("utf-8")
        # 使用JSON

        
        translate_results = json.loads(html)
        # 找到翻译结果
        translate_results = translate_results['translateResult'][0][0]['tgt']
        # 打印翻译信息
        translate_results=translate_results.replace(' ','')
        return translate_results

