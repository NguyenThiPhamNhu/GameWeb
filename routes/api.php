<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post ('/posts','GameController@store');

Route::get ('/detail/{id}','GameController@detail');

Route::post ('/login','GameController@login');

Route::get ('/profile','GameController@getProfile');

Route::post('/profile/{id}','GameController@updateinfo');





