
from django.shortcuts import render,redirect
def is_login(func):
    def wrapper(*args,**kwargs):
        if args[0].session.get('is_login', None):


           return func(*args,**kwargs)

        else:
          return  redirect('/manage/')


    return  wrapper