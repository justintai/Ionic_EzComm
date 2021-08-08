(self["webpackChunkjustin"] = self["webpackChunkjustin"] || []).push([["default-src_app_services_database_service_ts"],{

/***/ 4382:
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": () => (/* binding */ DatabaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ 5855);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 283);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6215);







let DatabaseService = class DatabaseService {
    constructor(plt, sqlitePorter, sqlite, http) {
        this.plt = plt;
        this.sqlitePorter = sqlitePorter;
        this.sqlite = sqlite;
        this.http = http;
        this.dbReady = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.items = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.order = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.updateItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.plt.ready().then(() => {
            this.sqlite
                .create({
                name: "ezcomm",
                location: "default",
            })
                .then((db) => {
                this.database = db;
                this.seedDatabase();
            });
        });
    }
    seedDatabase() {
        this.http.get('assets/seed.sql', { responseType: 'text' })
            .subscribe(sql => {
            this.sqlitePorter.importSqlToDb(this.database, sql)
                .then((_) => {
                this.loadItems();
                this.loadOrders();
                this.dbReady.next(true);
            })
                .catch(e => console.log(e));
        });
    }
    getDatabaseState() {
        return this.dbReady.asObservable();
    }
    getItems() {
        return this.items.asObservable();
    }
    getOrders() {
        return this.order.asObservable();
    }
    // Items database
    loadItems() {
        return this.database.executeSql('SELECT * FROM items', []).then(data => {
            let items = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    items.push({
                        items_id: data.rows.item(i).items_id,
                        name: data.rows.item(i).name,
                        price: data.rows.item(i).price,
                        stock: data.rows.item(i).stock,
                        min_purc: data.rows.item(i).min_purc,
                        promo_price: data.rows.item(i).promo_price,
                        image: data.rows.item(i).image,
                        created_date: data.rows.item(i).created_date,
                    });
                }
            }
            this.items.next(items);
        });
    }
    getItem(id) {
        return this.database
            .executeSql("SELECT * FROM items WHERE items_id = ?", [id])
            .then((data) => {
            if (data == null) {
                return {
                    items_id: 0,
                };
            }
            return {
                items_id: data.rows.item(0).items_id,
                name: data.rows.item(0).name,
                price: parseFloat(data.rows.item(0).price).toFixed(2),
                stock: data.rows.item(0).stock,
                min_purc: data.rows.item(0).min_purc,
                promo_price: parseFloat(data.rows.item(0).promo_price).toFixed(2),
                image: data.rows.item(0).image,
                created_date: data.rows.item(0).created_date
            };
        });
    }
    deleteItems(id) {
        return this.database
            .executeSql("DELETE FROM items WHERE items_id = ?", [id])
            .then((_) => {
            this.loadItems();
        });
    }
    addItems(itemobj) {
        let data = [itemobj.name, itemobj.price, itemobj.stock, itemobj.min_purc, itemobj.promo, itemobj.img, itemobj.date];
        return this.database
            .executeSql('INSERT INTO items (name, price, stock, min_purc, promo_price, image, created_date) VALUES (?, ?, ?, ?, ?, ?, ?)', data)
            .then((data) => {
            this.loadItems();
            return (data);
        })
            .catch((e) => {
            return "Error in addItems" + JSON.stringify(e);
        });
    }
    updateItems(itemobj) {
        let obj = [itemobj.name, itemobj.price, itemobj.stock, itemobj.min_purc, itemobj.promo, itemobj.img];
        return this.database
            .executeSql(`UPDATE items SET name = ?, price = ?, stock = ?, min_purc = ?, promo_price = ?, image = ? WHERE items_id = ${itemobj.id}`, obj)
            .then(data => {
            this.loadItems();
            this.updateItemEvent.emit();
        })
            .catch((e) => {
            return "Error in updateItems" + JSON.stringify(e);
        });
    }
    // Order database
    loadOrders() {
        return this.database.executeSql('SELECT o.*, i.items_id, i.name, i.stock, i.price, i.min_purc, i.promo_price, i.image FROM orders o LEFT JOIN items i ON i.items_id = o.items_id ORDER BY o.order_date DESC', [])
            .then((data) => {
            let order = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    order.push({
                        order_id: data.rows.item(i).order_id,
                        items_id: data.rows.item(i).items_id,
                        qty: data.rows.item(i).qty,
                        amount: data.rows.item(i).amount,
                        cus_name: data.rows.item(i).cus_name,
                        cus_tel: data.rows.item(i).cus_tel,
                        cus_address: data.rows.item(i).cus_address,
                        shipping_no: data.rows.item(i).shipping_no,
                        order_date: data.rows.item(i).order_date,
                        status: data.rows.item(i).status,
                        item_name: data.rows.item(i).name,
                        item_stock: data.rows.item(i).stock,
                        item_price: data.rows.item(i).price,
                        item_min: data.rows.item(i).min_purc,
                        item_promo: data.rows.item(i).promo_price,
                        item_img: data.rows.item(i).image,
                    });
                }
            }
            this.order.next(order);
        });
    }
    // buffOrder(status): Promise<any> {
    //   let order = [];
    //   return this.database.executeSql(
    //       "SELECT o.*, i.name, i.stock, i.price, i.min_purc, i.promo_price, i.image FROM orders o WHERE o.status = ? LEFT JOIN items i ON i.items_id = o.items_id", 
    //     [status])
    //     .then((data) => {
    //       if (data == null) {
    //         return {
    //           order_id: 0,
    //         };
    //       }
    //       else{
    //         if(data.rows.length > 0) {
    //           for (var i=0; i<data.rows.length; i++) {
    //             order.push({
    //               order_id: data.rows.item(i).order_id,
    //               items_id: data.rows.item(i).items_id,
    //               qty: data.rows.item(i).qty,
    //               amount: data.rows.item(i).amount,
    //               cus_name: data.rows.item(i).cus_name,
    //               cus_tel: data.rows.item(i).cus_tel,
    //               cus_address: data.rows.item(i).cus_address,
    //               shipping_no: data.rows.item(i).shipping_no,
    //               order_date: data.rows.item(i).order_date,
    //               status: data.rows.item(i).status,
    //               item_name: data.rows.item(i).name,
    //               item_stock: data.rows.item(i).stock,
    //               item_price: data.rows.item(i).price,
    //               item_min: data.rows.item(i).min_purc,
    //               item_promo: data.rows.item(i).promo_price,
    //               item_img: data.rows.item(i).image,
    //             });
    //           }
    //         }
    //         this.order.next(order);
    //       }
    //       return order;
    //     });
    // }
    getOrder(id) {
        return this.database.executeSql('SELECT o.*, i.items_id, i.name, i.stock, i.price, i.min_purc, i.promo_price, i.image FROM orders o LEFT JOIN items i ON i.items_id = o.items_id WHERE o.order_id = ?', [id])
            .then((data) => {
            if (data == null) {
                return {
                    order_id: 0,
                };
            }
            return {
                order_id: data.rows.item(0).order_id,
                items_id: data.rows.item(0).items_id,
                qty: data.rows.item(0).qty,
                amount: data.rows.item(0).amount,
                cus_name: data.rows.item(0).cus_name,
                cus_tel: data.rows.item(0).cus_tel,
                cus_address: data.rows.item(0).cus_address,
                shipping_no: data.rows.item(0).shipping_no,
                order_date: data.rows.item(0).order_date,
                status: data.rows.item(0).status,
                item_name: data.rows.item(0).name,
                item_stock: data.rows.item(0).stock,
                item_price: data.rows.item(0).price,
                item_min: data.rows.item(0).min_purc,
                item_promo: data.rows.item(0).promo_price,
                item_img: data.rows.item(0).image,
            };
        });
    }
    updateStatus(id, status, item_id, stock) {
        return this.database
            .executeSql("UPDATE orders SET status = ? WHERE order_id = ?", [status, id])
            .then((_) => {
            this.updateItemsStock(item_id, stock);
            this.loadOrders();
        });
    }
    // update item stock from the 1st tab (pending & revert order)
    updateItemsStock(id, stock) {
        return this.database
            .executeSql("UPDATE items SET stock = ? WHERE items_id = ?", [stock, id])
            .then((_) => {
            this.loadItems();
        });
    }
    addOrder(orderobj, dumpdata) {
        let data = [
            orderobj.items_id, orderobj.qty, orderobj.order_date,
            orderobj.amount, orderobj.cus_name, orderobj.cus_tel,
            orderobj.cus_address, orderobj.shipping_no, orderobj.status
        ];
        return this.database
            .executeSql('INSERT INTO orders (items_id, qty, order_date, amount, cus_name, cus_tel, cus_address, shipping_no, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', data)
            .then((data) => {
            this.loadOrders();
            this.updateStock(dumpdata);
            return (data);
        })
            .catch((e) => {
            return "Error in addOrder" + JSON.stringify(e);
        });
    }
    updateStock(dumpdata) {
        console.log(dumpdata);
        if (dumpdata.length == 1) {
            console.log("New");
            return this.database
                .executeSql(`UPDATE items SET stock = (stock - ${dumpdata[0].qty}) WHERE items_id = ?`, [dumpdata[0].item_id])
                .then((_) => {
                console.log("New Success");
                this.loadItems();
            })
                .catch((e) => {
                console.log("Add", e);
                return "Error in Add New Item" + JSON.stringify(e);
            });
        }
        else if (dumpdata.length == 2) {
            console.log("Edit");
            return this.database
                .executeSql(`UPDATE items SET stock = (stock + ${dumpdata[0].qty}) WHERE items_id = ?`, [dumpdata[0].item_id])
                .then((_) => {
                this.renewStock(dumpdata[1].item_id, dumpdata[1].qty);
                console.log("Edit Success");
                this.loadItems();
            })
                .catch((e) => {
                console.log("Edit", e);
                return "Error in Edit" + JSON.stringify(e);
            });
        }
    }
    renewStock(id, qty) {
        console.log(id, qty);
        return this.database
            .executeSql(`UPDATE items SET stock = (stock - ${qty}) WHERE items_id = ?`, [id])
            .then((_) => {
            console.log("Extension Success");
            this.loadItems();
        });
    }
    updateOrder(orderobj, dumpdata) {
        if (dumpdata.length != 0 || dumpdata.length != null) {
            this.updateStock(dumpdata);
        }
        let data = [orderobj.items_id,
            orderobj.qty, orderobj.amount,
            orderobj.cus_name, orderobj.cus_tel,
            orderobj.cus_address, orderobj.shipping_no,
            orderobj.order_date, orderobj.status
        ];
        return this.database
            .executeSql(`UPDATE orders SET items_id = ?, qty = ?, amount = ?, cus_name = ?, cus_tel = ?, cus_address = ?, shipping_no = ?, order_date =?, status = ? WHERE order_id = ${orderobj.id}`, data)
            .then((data) => {
            this.loadOrders();
            this.updateItemEvent.emit();
        })
            .catch((e) => {
            return "Error in updateOrder" + JSON.stringify(e);
        });
    }
    getDate() {
        let date_ob = new Date();
        // adjust 0 before single digit date
        let date = ("0" + date_ob.getDate()).slice(-2);
        // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        // current year
        let year = date_ob.getFullYear();
        // current hours
        let hours = ("0" + date_ob.getHours()).slice(-2);
        // current minutes
        let minutes = ("0" + date_ob.getMinutes()).slice(-2);
        // current seconds
        let seconds = ("0" + date_ob.getSeconds()).slice(-2);
        // prints date & time in YYYY-MM-DD HH:MM:SS format
        return `${year}-${month}-${date}T${hours}:${minutes}:${seconds}`;
    }
};
DatabaseService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLitePorter },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__.SQLite },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient }
];
DatabaseService.propDecorators = {
    updateItemEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
DatabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DatabaseService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_database_service_ts.js.map