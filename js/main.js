let news = []
const getLatestNews = async () => {
  let url = new URL(
    "https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business"
  );
  /* latest_headlines --> end point : end point를 보고 어떤 api를 받을지 구별
    end point 뒤 ? 뒤는 쿼리
    대부분에 api에는 page와 page size가 있음.
   */

  let header = new Headers({
    "x-api-key": "5nmQcqMNYGNCyvUNlwucxQAyz5hPA8M18sf6CzXmlao",
  });

  let response = await fetch(url, { headers: header }); // await, async 는 세트, 데이터를 불러주는 메서드, await 없을때는 데이터가 오는중이라고 뜸, 
  let data = await response.json() //서버 통신에서 많이 쓰는 데이터 타입(객체라고 이해하면 편함), json으로 인간이 알아볼 수 있게 데이터를 변환해주는것이라고 이해하면됨. fetch로 url을 저장하고, await, async로 불러옿고, json으로 데이터 변환
  news = data.articles
  
  console.log(news);
};

getLatestNews();

//5nmQcqMNYGNCyvUNlwucxQAyz5hPA8M18sf6CzXmlao ---> API 키
