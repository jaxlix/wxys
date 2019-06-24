const IP = "http://50.64.102.101/ga/xinghuo-apaas-cloudsearch";
const usfzh = '320106197601051218';
export const api = {
    // 请求人员的身份证号码
    usfzh: usfzh,
    // 列表
    getList: IP+'/api/basicSearchApi',
    // 详情
    getDetails: IP+'/api/detailSearchApi'
}