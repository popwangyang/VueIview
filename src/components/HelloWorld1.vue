<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item .Submeu{
        display: inline-block;
        overflow: hidden;
        width: 100px;
        color: red;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    /*.collapsed-menu .Submeu{
        width: 0px;
        color: red;
        display: none;
        transition: width .2s ease;
    }
    .collapsed-menu .ivu-menu-submenu-title-icon{
    	display: none;
    }
    .collapsed-menu .i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }*/
    
</style>
<style>
	.layout .menu-item .Submeu{
		display: inline-block;
		width: 60%;
	}
	.layout .collapsed-menu .Submeu{
        width: 0px;
        color: red;
        display: none;
        transition: width .2s ease;
    }
    .layout .collapsed-menu .ivu-menu-submenu-title-icon{
    	display: none;
    }
    .layout .collapsed-menu .ivu-menu-submenu-title .ivu-icon{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 30px;
        
    }
	
	
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                  <Menu ref='side_menu' :open-names='arr' theme="dark" width="auto"  @on-select="change"  :class="menuitemClasses">
                                <ggg :msg='RouteData' @to-submun='open'></ggg>
                  </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                    Content
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
    		components:{ 
    	     ggg:{
    	     	name:'gs',
    	     	template:` <span>
    	     	<Submenu v-for="item in msg"  :name="item.name" :key="item.name" v-if="item.name!='aaa'" >
                                    <template slot="title" >
                                    <span @click="foo(item.name)">
                                        <Icon :type="item.icon"></Icon>
                                        <span class='Submeu'>{{item.title}}</span>
                                   </span>
                                    </template>
                                    <template v-for="item2 in item.children">
                                              <gs :msg='[item2]' v-if="item2.children"></gs>
                                              <MenuItem :key="item2.name"  :name="item2.name" v-else>
                                              
                                               {{item2.title}}
                                           
                                              </MenuItem>
                                    </template>
                          </Submenu>
                          
                         </span> `,
                props:['msg'],
                data(){
                	return{
                		SubmunArr:[]
                	}
                },
                methods: {
                	foo(name){
                		let flage = this.SubmunArr.indexOf(name)>-1 ? true:false;
                		if(flage){
                		   var num = this.SubmunArr.indexOf(name)
                		   this.SubmunArr.splice(num,1)
                		}else{
                			this.SubmunArr.push(name)
                		}
                		console.log(this.SubmunArr)
                		this.$emit('to-submun',this.SubmunArr)
                	}
                }
              
    	     }
    	     
    	 
    	},
        data () {
            return {
                isCollapsed: false,
                RouteData:"",
                submun:[],
                arr:[]
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
            	if(this.isCollapsed){
            		this.arr=this.submun
            	}else{
            		this.arr=[]
            	}
            	
                this.$refs.side1.toggleCollapse();
        	    this.$nextTick(function(){
        			this.$refs.side_menu.updateOpened()
        		})
              
            },
            change(name){
        		console.log(name)
        		this.$router.push({
                    name: name
                });
                
        	},
        	open(name){
//      		this.$nextTick(function(){
//      			this.$refs.side_menu.updateOpened()
//      		})
//      		console.log(name)
        		this.submun = name
        	}
        },
       created(){
        	this.RouteData=this.$router.options.routes[0].children
        	console.log(this.RouteData)
        	
       },
       updated () {
				        	console.log("ooo")
				        this.$nextTick(() => {
				            if (this.$refs.side_menu) {
				            	
				                this.$refs.side_menu.updateOpened();
				            }
				        });
				     }
    }
</script>
