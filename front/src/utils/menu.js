const menu = {
    list() {
        return [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除"],"menu":"博主","menuJump":"列表","tableName":"bozhu"}],"menu":"博主管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["新增","查看","修改","删除"],"menu":"文章分类","menuJump":"列表","tableName":"wenzhangfenlei"}],"menu":"文章分类管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","修改","删除","查看评论"],"menu":"博主文章","menuJump":"列表","tableName":"bozhuwenzhang"}],"menu":"博主文章管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"系统公告","tableName":"news"},{"appFrontIcon":"cuIcon-circle","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","查看评论"],"menu":"博主文章列表","menuJump":"列表","tableName":"bozhuwenzhang"}],"menu":"博主文章模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","查看评论"],"menu":"博主文章列表","menuJump":"列表","tableName":"bozhuwenzhang"}],"menu":"博主文章模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","修改","删除"],"menu":"博主","menuJump":"列表","tableName":"bozhu"}],"menu":"博主管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除","查看评论"],"menu":"博主文章","menuJump":"列表","tableName":"bozhuwenzhang"}],"menu":"博主文章管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","查看评论"],"menu":"博主文章列表","menuJump":"列表","tableName":"bozhuwenzhang"}],"menu":"博主文章模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"博主","tableName":"bozhu"}]
    }
}
export default menu;
