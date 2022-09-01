$(function() {


    $.ajax({
        type: "GET",
        url: "js/anime.json",
        dataType: "json",
        success: function(data) {
            $.each(data, function(k, v) {
                // $("ul").append("<li><div class='img'><img src='" + v.images + "'></div></li>")
                $("ul").append("<li><div class='img'><img src='" + v.src + "'></div></li>")
                $("li:eq(" + k + ")").append(("<div class='box'></div>"));
                $("li:eq(" + k + ") .box").append(("<h1>" + v.title + "</h1>"));
                $("li:eq(" + k + ") .box").append(("<little class='namech'>" + v.namech + "</>"));
                // $("li:eq(" + k + ") .box").append(("<p class='time'>" + v.time + "</p>"));
                // $("li:eq(" + k + ") .box").append(("<p class='text'>" + v.paragraph + "</p>"));
                // 日期
                var date = new Date(v.date * 1000);
                Y = date.getFullYear() + '-';
                M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                D = (date.getDate() + 1 < 10 ? '0' + (date.getDate()) : date.getDate());
                // 分数
                scoreS = parseInt(v.score / 2);
                scoreY = v.score % 2;
                scoreRs = "";
                scoreRy = "";
                for (var i = 0; i < scoreS; i++) {
                    scoreRs += "★";
                }

                if (scoreY != 0) {
                    scoreRy = "☆";
                }

                $("li:eq(" + k + ") .box").append(("<div class='time'>" + Y + M + D + "<p class='score'>" + scoreRs + scoreRy + "</p></div>"));
                //原来没有评分的时间p标签
                // $("li:eq(" + k + ") .box").append(("<p class='time'>" + Y + M + D + "</p>"));
                $("li:eq(" + k + ") .box").append(("<p class='text'>" + v.intro + "</p>"));
            })
            $(".paging_list").paging({
                PageNum: 8, //每页显示数目
                pageMax: true, //按钮长度是否显示
                pageMaxHideShow: false, //在最后一个的时候是否隐藏按钮长度
                pageDownUpHide: true, //到第一个或最后一个是否让上一页或下一页消失
                pageInput: true, //是否使用文本框输入跳转
                pagingBtnHide: false, //是否让按钮变为一个
                pagingBtnPaging: true, //按钮是否分页
                pagingDisplay: "flex", //显示的属性，弹性盒子还是块化
            })
        },
    })


})