<template>
	<div class="loginPage">
		<div class="loginTitle">
			使用账号密码登录
		</div>
		<div class="loginInfo">
			<p><label for="userName">账号</label><input type="text" id="userName" name='username' placeholder='请输入手机号/邮箱'></p>
			<p><label for="psw">密码</label><input type="password" id="psw" name="psw" placeholder='请输入密码'></p>
			<p><router-link class='toReg'>手机验证码登录</router-link><router-link class='toReg'>忘记密码</router-link></p>
			<p><button>登录</button></p>
			<p><router-link class='toReg'>快速注册</router-link></p>
			<p><router-link>可得周周升加息4%，现金券&yen;266</router-link></p>
			<p><router-link class='toReg'>使用分期乐账号登录</router-link></p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'login'
	}
</script>

<style>
</style>
