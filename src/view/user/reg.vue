<template>
	<div class="regPage">
		<div class="regPageTitele">
			<p>注册成功领取双重福利</p>
			<p>周周升加息4%，现金券266元</p>
		</div>
		<div class="regInfo">
			<p><label for="userName">手机号</label><input type="text" name="userName" placeholder="请填写手机号码"></p>
			<p><label for="passcode">验证码</label><input type="text" name="passcode" placeholder="请输入验证码"></p>
			<p><label for="psw">登录密码</label><input type="password" name="psw" placeholder="6~20位,至少包含数字、字母"></p>
			<p><label for="">推荐人</label><input type="text" placeholder="手机号/邀请码(选填)"></p>
			<p>
				<input type="checkbox" name="protocol">
				<label for="protocol">
					我已阅读、理解并同意
					<router-link>《注册协议》</router-link>
					<router-link>《隐私保护政策》</router-link>
					<router-link>《橘子理财Cookie指引》</router-link>
				</label>
			</p>
			<p><button>立即注册</button></p>
			<p><router-link>快速登录</router-link></p>
			<p>
				<span>美股上市</span>
				<span>广发银行存管</span>
				<span>小额消费资产</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'reg'
	}
</script>

<style>
</style>
