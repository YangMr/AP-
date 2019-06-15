<template>
	<div>
		<mt-tab-container v-model="selected" :value="selected" :swipeable="false">
		  <mt-tab-container-item id="书架">
			<mt-header fixed :title="selected"></mt-header>
			<Bookshelf class="tab-container"></Bookshelf>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="分类">
			<mt-header fixed :title="selected"></mt-header>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="排行">
			<mt-header fixed :title="selected"></mt-header>
		  </mt-tab-container-item>
		   <mt-tab-container-item id="搜索">
		  	<mt-header fixed :title="selected"></mt-header>	
		  </mt-tab-container-item>
		</mt-tab-container>
		<!-- 底部导航 -->
		<mt-tabbar v-model="selected" :fixed="true" :value="selected">
		  <mt-tab-item id="书架">
			<img slot="icon" src="../assets/image/book.svg">
			书架
		  </mt-tab-item>
		  <mt-tab-item id="分类">
			<img slot="icon" src="../assets/image/category.svg">
			分类
		  </mt-tab-item>
		  <mt-tab-item id="排行">
			<img slot="icon" src="../assets/image/rank.svg">
			排行
		  </mt-tab-item>
		  <mt-tab-item id="搜索">
			<img slot="icon" src="../assets/image/search.svg">
			搜索
		  </mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
import Bookshelf from "./bookshelf/Bookshelf"	
export default {
  data : function(){
	  return {
		 selected : "书架"
	  }
  },
  components : {
	  Bookshelf
  }
}
</script>

<style>
.tab-container{
	box-sizing: border-box;
	padding-top: 2rem;
	padding-bottom: 55px;
	width: 100vw;
	min-height: 100vh;
}
</style>
