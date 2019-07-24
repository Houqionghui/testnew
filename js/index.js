let page = 0,
	imgData = null,
    isRun = false;
    
let allProductData = [] //全部的数据
let productData = [] //要渲染的数据
let listQuery = {
	currPage: 1,
	pageSize: 10
}

function bindHTML (){
    let oUl = document.getElementsByClassName('list')[0];
	console.log(oUl);
	let str = '';
	let data = productData;

	for (let i = 0; i < data.length; i++) {
        //  console.log(data[i].news_title);
      str +=`
     <li class="clearfix main "  >
     <div class="bui-box clearfix" >
         <div class="bui-left single-mode-lbox clearfix">
            <img src="./img/1.jpeg" alt="">
  
         </div>
  
  
         <div class="single-mode-rbox  ">
         <div class="single-mode-rbox-cont " >
                 <div class="title-box " onclick="list()">
                     <a href="details.html "  id="back">${data[i].news_title} 
                     </a>
                 </div>
                 <div class="bui-boxaa">
                     <div class="bui-left">
                         <!----> <a href="" class="footer-bar-action media-avatar">
                             <!-- <img src="//p2.pstatp.com/large/382c000fbf301ddc6d1a" lazy="loaded"> -->
                         </a>
                         <a href=""
                             class="footer-bar-action source">&nbsp;${data[i].news_source}&nbsp;⋅</a>
                         <a href=""
                             class="footer-bar-action source">&nbsp;22评论&nbsp;⋅</a>
                         <span class="footer-bar-action">&nbsp;${data[i].news_pubdate}</span>
  
                     </div>
                    
                     
                     <div class="car">
                                     
                     <div class="hezi">
                      <a href=""> 
                          <span>不感兴趣</span>
                         <span>X</span></a>
                     </div>
                     <span  class="head-car">X</span>
         
                 </div>
                 </div>
             </div>
         </div>
     </div>
  </li>
      `

	}

	oUl.innerHTML += str;

}

function queryData(){
    //数据处理 
productData = allProductData.slice((listQuery.currPage-1) * listQuery.pageSize, listQuery.currPage * listQuery.pageSize)
    listQuery.currPage++;
    // loading.style.display = 'block';
    // 及时更新视图
    bindHTML();
    console.log(productData)
    
}
// 拿到全部数据
function getAllData(){
    let xhr = new XMLHttpRequest();
    xhr.open('get', './json/data.json', false);
    xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			// debugger
			allProductData = JSON.parse(xhr.responseText).RECORDS;
            // 初始化列表数据  并渲染视图
            queryData();
           
           
           }
       }
    xhr.send(null);
    
    }
getAllData();
load();

function load(){
    // loading.style.display = 'none';
}


window.onscroll = function() {
	// 文档内容实际高度（包括超出视窗的溢出部分）
	var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
	console.log(scrollHeight)
	//滚动条滚动距离
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	console.log(scrollTop)
	//窗口可视范围高度
	var clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight, document.body.clientHeight);
	console.log(clientHeight)

	if (clientHeight + scrollTop >= scrollHeight) {
      queryData();
     }
}
    back.onclick=function(){
    window.location.href='details.html';
}
