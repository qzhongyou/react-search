## react-search
> react,redux项目 开发详情 和 个人总结

注: 因为接口数据来至zbj域名,如果需要运行项目,为能正确获取到数据,请先绑定host `127.0.0.1	 search.zbj.com`。

#### 安装
```
git clone git@github.com:qzhongyou/react-serarch.git
```
#### 运行
```
npm start
```
#### 访问
[search.zbj.com:3000](search.zbj.com:3000)

#### 说明
1. 现webpack配置为简陋版,暂时不具参考性。
2. 现服务端为dev类型服务,暂时不具参考性。
3. 对于上面的问题,将在后续开发过程中依次解决。
4. 项目进展详情和整个开发过程的困难将不断更新,在README中。
5. 项目版本将以分支的形式展现,也就是出现在不同的分支里面。

#### 12.18 v1.0
* 项目基本功能完成,项目待优化。以后几天将详细介绍开发过程。

#### 12.19 v1.0
* 添加日期筛选功能,该功能需要注意两点:
1. 该功能只有足迹页面具备,但和找相似页面使用的同一个展示主键,所以需要一下设置:
```
 <Route path="/" exact render={()=>{ //首页显示
     return  <DatePicker defaultValue={moment(date, dateFormat)} format={dateFormat} onChange ={selectDate} />
 }} />
```
2. 关于日期筛选功能实现的 思考。   
* 首先日期筛选后应当触发`servicesAction`。这里触发的方式有2种,第一种在`onChange`事件中触发,将`dateString`作为日期的实参传入`servicesAction`,第二种将日期的state作为参数传入`servicesAction`,
第二种方式采用了状态来触发行为,明显要优于第一种。
```
 componentWillReceiveProps(nextProps){
        if(nextProps.date !== this.props.date && nextProps.date !==""){
            this.props.action(nextProps.date);
        }
    }
```

#### 12.20 v2.0
* 将我的足迹页和找相似页公共的展示型组件进行解耦,拆分为两个不同展示型组件,分别引用公共组件。
* 因为错误提示和loading效果,反复在各组件中使用,使用提取为公共高阶组件。


#### 12.26 v2.0
* 修复之前错误提示和loading效果的bug。之前因为每次loading之后,都会重新渲染WrappedComponent组件,导致不断触发componentWillMount,然后不断loading,一直循环。

