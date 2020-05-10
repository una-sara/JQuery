//定义jQuery插件，其实就是向jQuery原型对象中添加一个自定义函数
/*********** accordion *************/
jQuery.fn.accordion=function(){
  var $parent=this;
  //1. 侵入:
  //给$parent自己加accordion class
  $parent.addClass("accordion")
  //找$parent的孩子中奇数位置的加title
  .children(":nth-child(odd)")
          //":even|odd"
  .addClass("title")//return 3个title
  //找每个title的下一个兄弟加content和fade
  .next() //return 每个title的下一个div-3个
  .addClass("content fade") 
  //return 3个content
  //给所有content中第一个加in
  .first().addClass("in")
  //2. 绑定事件:
  //剪切14_accordion.html中最后一个<script>中的事件绑定代码到此
  $parent
  .on("click",".title",function(e){
    $(this).next(".content").toggleClass("in")
      .siblings(".content").removeClass("in")
  });
}
/*********** tabs *************/
jQuery.fn.tabs=function(){
  var $parent=this;
  //1. 侵入
  //查找$parent下第一个孩子，加tabs
  $parent
  .children(":first").addClass("tabs")
  //查找第一个孩子下的第一个孩子，加active
  .children(":first").addClass("active")
  //查找$parent下第一个孩子下的所有a，添加自定义扩展属性data-toggle=tab
  $parent
  .children(":first").find("a")
  .attr("data-toggle","tab");
  //查找$parent下最后一个孩子，加container
  $parent
  .children(":last").addClass("container")
  //查找最后一个孩子的第一个孩子，加active
  .children(":first").addClass("active")
  //2. 绑定事件
  //剪切15_tabs.html中最后一个<script>的内容到此
  //查找$parent的第一个孩子ul
  $parent.children(":first")
  .on("click","[data-toggle=tab]",function(e){
    e.preventDefault()
    var $tar=$(this);
    if(!$tar.parent().is(".active")){
      $tar.parent().addClass("active")
        .siblings().removeClass("active");
      var id=$tar.attr("href");
      $(id).addClass("active")
        .siblings().removeClass("active");
    }
  })
}
