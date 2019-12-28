var db = require('../fn/db');

exports.loadAcount = () => {
    var sql = `SELECT * 
    FROM nguoidung INNER JOIN khachhang ON nguoidung.idNguoiSuDung=khachhang.idKhachHang `;
    return db.load(sql);
}
exports.UpdatepassAcount = (username, Pass) => {
    var sql = `UPDATE nguoidung SET pass='${Pass}' WHERE userName = '${username}'`;
    return db.save(sql);
}
