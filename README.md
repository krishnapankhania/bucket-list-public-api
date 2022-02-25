# Bucket List API

This API is developed to suggest bucket list places,adventures and many more things(Upcoming) that you can add to your bucket list!

## Inspiration 
I have dig up the internet to find the best items to add in each and every category.I have added all credits to websites and photo source, most of the photos are from [Unsplash](https://unsplash.com/)

## Usage:

> Note: The project is being hosted by Heroku with free dyno; thus, there will be potential delay the first time you make a request (app went to sleep after dyno does not receive traffic in 1 hour). Please be patient, and the call will be faster next time.

## Demo
    https://bucket-list-public-api.herokuapp.com

## API Endpoint
    https://bucket-list-public-api.herokuapp.com/api

## Example:

Get random suggestion.

    https://bucket-list-public-api.herokuapp.com/api

```JSON
{
    "name":"Walk along the Great Wall of China",
    "details":"The Great Wall of China is a good reason for the existence of the Bucket List! It’s an astonishing relic of China’s history, and it’s a must for many travelers and tourists around...",
    "image":"https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "imageCredit":"https://unsplash.com/",
    "from":"https://tourscanner.com/blog/bucket-list-ideas/",
    "category":"adventure"
}
```
Get all suggestion with pagination.
    https://bucket-list-public-api.herokuapp.com/api/all?page=1&limit=3

```JSON
[
    {
    "name": "Get stunned by the Great Pyramid of Giza",
    "details": "The Great Pyramid of Giza defines bucket...",
    "image": "https://images.unsplash.com/photo-1564554860010-304d58f6edb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80",
    "imageCredit": "https://unsplash.com/",
    "from": "https://tourscanner.com/blog/bucket-list-ideas/"
  },
  {
    "name": "Walk along the Great Wall of China",
    "details": "The Great Wall of China is a good reason...",
    "image": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "imageCredit": "https://unsplash.com/",
    "from": "https://tourscanner.com/blog/bucket-list-ideas/"
  },
  {
    "name": "Explore Petra",
    "details": "Jordan’s rose-colored sandstone city is an extraordinary...",
    "image": "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "imageCredit": "https://unsplash.com/",
    "from": "https://tourscanner.com/blog/bucket-list-ideas/"
  }
]
```
