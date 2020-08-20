<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// API WITH REACTJS
Route::get('/api/posts','GameController@index');
Route::get('/api/posts/{id}','GameController@show');

Route::get('/api/postsUser','GameController@indexUser');
Route::get('/api/postsUser/{id}','GameController@showUser');
 
// admin managerment with add and display
Route::get('/admin/adminmanager',"GameController@display");


Route::get('/admin/add',"GameController@formAdd")->name('admin.add');;
Route::post('/admin/add',"GameController@add_game");


//admin managerment with edit and delete
Route::get('admin/edit/{id}', 'GameController@formEdit')->name('admin.edit');
Route::post('/admin/adminmanager', 'GameController@update');
Route::delete('/admin/delete/{id}', 'GameController@delete');

// USER
// user managerment with add and display
Route::get('/admin/usermanager',"GameController@displayUser");


Route::get('/admin/adduser',"GameController@formAddUser")->name('admin.adduser');;
Route::post('/admin/adduser',"GameController@add_user");


//user managerment with edit and delete
//Route::get('/api/login','GameController@login');
Route::get('admin/edituser/{id}', 'GameController@formEditUser')->name('admin.edituser');
Route::post('/admin/usermanager', 'GameController@updateUser');
Route::delete('/admin/deleteuser/{id}', 'GameController@deleteUser');



