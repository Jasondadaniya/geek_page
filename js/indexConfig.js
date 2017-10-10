/**
 * 首页管理
 */
function indexConfig(){
	
	var self=this;
	
	var fab = new mdui.Fab('#fab');
	
	this.init=function(){
		
		$("#m_Iframe").attr("src","view/indexPage.html").attr("name","indexPage");
		
		$('#indexPage').bind('click',function(){
			$("#m_Iframe").attr("src","view/indexPage.html").attr("name","lableNodePage");
		});
		
		$('#lableNodePage').bind('click',function(){
			$("#m_Iframe").attr("src","view/lableNodePage.html").attr("name","lableNodePage");
		});
		
		$('#questionsAnswersPage').bind('click',function(){
			$("#m_Iframe").attr("src","view/questionsAnswersPage.html").attr("name","questionsAnswersPage");
		});
		
		$('#openSourcePage').bind('click',function(){
			$("#m_Iframe").attr("src","view/openSourcePage.html").attr("name","openSourcePage");
		});
		
		$('.registerBtn').bind('click',function(){
        	self.userRegister();
        });
        
        $('.userLogin').bind('click',function(){
        	self.userLogin();
        });
		
	}
	
	/**
	 * 用户注册
	 */
	this.userRegister=function(){

		var userName = $.trim($(".userName").val());
		var email = $.trim($(".email").val());
		var password = $.trim($(".password").val());
		
		if(userName==null || userName==""){
			return;
		}
		
		if(email==null || email==""){
			return;
		}
		
		if(password==null || password==""){
			return;
		}
		
		var user={};
		user.userName = userName;
		user.password = password;
		user.email = email;
		
		$.ajax({
			url:HOST_URL+'/user/userRegister',  
            type: "POST",
            dataType: "json",//跨域ajax请求,返回数据格式为json
            cache: false,
            timeout: 10000,//请求超时时间,单位为毫秒
            async: true,
            global: false,//禁用Jquery全局事件
            scriptCharset: 'UTF-8',
            //processData : false,         // 告诉jQuery不要去处理发送的数据
            contentType: 'application/json;charset=UTF-8',//请求内容的MIMEType
			data:JSON.stringify(user),
			success:function(responseData, status){
				if(responseData.data==1){
					layer.msg('注册完成请登录！', {icon: 1});
					$(".returnLogin").trigger("click");
				}else if(responseData.data==-1){
					layer.msg('用户名已存在,请修改！', {icon: 7});
				}else{
					layer.msg('操作失败！', {icon: 5});
				}
			}
		});
		
	}
	
	/**
	 * 用户登陆
	 */
	this.userLogin=function(){

		var userName = $.trim($(".name").val());
		var password = $.trim($(".pwd").val());
		
		if(userName==null || userName==""){
			layer.msg('用户名不能为空！', {icon: 7});
			return;
		}
		
		if(password==null || password==""){
			layer.msg('密码不能为空！', {icon: 7});
			return;
		}
		
		$.post(HOST_URL+'/user/userLogin',{"userName":userName,"password":password},function(data){
			
			if(data.success){
				
				var result = data.data;
				console.log(result);
					
				var html = "<img class=\"mdui-img-circle\" src='"+result.headImgUrl+"' width=\"40\" height=\"40\" style=\"border: 1px solid ghostwhite;\"/>";
				$(".headImg").html(html);
				$(".headImg").removeAttr("mdui-dialog");
				$(".user_more").show();
				
				$("#userId").val(result.id);
				$("#userName").val(result.userName);
				$("#headImgUrl").val(result.headImgUrl);
				$("#sex").val(result.sex);
				$("#email").val(result.email);
				$("#brief").val(result.brief);
				$("#birthday").val(result.birthday);
				$("#phone").val(result.phone);
				$("#createTime").val(result.createTime);
			} else{
				layer.msg('程序异常！', {icon: 5});
			}
		});
		
	}
	self.init();
	
}
