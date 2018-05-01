<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff'}">
                           
                               
                                <ggg :msg='RouteData' @on-change="change"></ggg>
                            
                        </Sider>
                        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                            <router-view/>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
            <Button @click="foo" type="primary">点击</Button>
        </Layout>
    </div>
</div>
</template>
<script>
	
    export default {
    	components:{ 
    	     ggg:{
    	     	name:'gs',
    	     	template:` <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" @on-select="routeTo">
    	     	<Submenu v-for="item in msg"  :name="item.name" :key="item.name" v-if="item.name!='aaa'">
                                    <template slot="title">
                                        <Icon :type="item.icon"></Icon>
                                        {{item.title}}
                                    </template>
                                    <template v-for="item2 in item.children">
                                              <gs :msg='item2' v-if="item2.children"></gs>
                                              <MenuItem :key="item2.name"  :name="item2.name" v-else>
                                              
                                               {{item2.title}}
                                           
                                              </MenuItem>
                                    </template>
                          </Submenu>
                          </Menu>
                          `,
                props:['msg'],
                data(){
                	return{
                		
                	}
                },
                methods:{
                	routeTo(name){
//              		console.log(name)
                		this.$emit("on-change",name)
                	}
                }
    	     }
    	     
    	 
    	},
        data(){
        	return{
        		RouteData:""
        		
        	}
        },
        methods:{
        	change(name){
        		console.log(name)
        		this.$router.push({
                    name: name
                });
        	},
        	foo(){
        		console.log("ooorrr")
        		this.$router.push({
        			name:'aaa'
        		})
        	}
        },
        created(){
        	this.RouteData=this.$router.options.routes[0].children
        	console.log(this.RouteData)
        	
        }
    }
</script>
