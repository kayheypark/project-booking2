//base.js
//모든 프로젝트에 사용되는 스크립트

$(document).ready(function() {

}); //document.ready

function Alert(msg, callback) {
    if ( msg !== null && (typeof msg == 'string') ) {
        Swal.fire({
            icon: 'success',
            text: msg
        }).then((result) => {
            if (result.isConfirmed) {
                if ( callback !== null && (typeof callback == 'function') ) {
                    callback();
                };
            };
        })
    };
};

function Confirm(msg, callback) {
    if ( msg !== null && (typeof msg == 'string') ) {
        Swal.fire({
            title: 'Are you sure?',
            text: msg,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '네!',
            cancelButtonText: '잘못눌렀어요.'
        }).then((result) => {
            if (result.isConfirmed) {
                if ( callback !== null && (typeof callback == 'function') ) {
                    callback();
                };
            };
        })
    };
};

function fnExample() {
    console.log('example이 실행됨');
};