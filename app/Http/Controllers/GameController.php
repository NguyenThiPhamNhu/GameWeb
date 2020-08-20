<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Posts;
use Illuminate\Support\Facades\Hash;
use \Firebase\JWT\JWT;
use App\Game;
use App\User;
use SebastianBergmann\Environment\Console;

class GameController extends Controller

{


function login(Request $request) {
    $name = $request->input('name');
    $password = $request->input('password');
    
   // $hashPassword = Hash::make($password);
    $key ="Hello vit"; 
    

    if(Auth::attempt(["name"=> $name,"password"=>$password])){
    $user = Auth:: user();
    $userId = $user->id;
    
    $data = array(
        "user_id" => $userId
    );
   
    $token = JWT::encode($data, $key);

    $responseData = array("user_id"=>$token);
    return response()->json($responseData, 200);
   
}
}

function profile($id){
    $user = DB::table('users')->where('id',$id)->first();
    $responData = array("user"=>$user);
    return response()->json($responData, 200);
}

function getProfile(){
    $token = request()->header("Authorization");
    $key ="Hello vit"; 
    $data = JWT::decode($token, $key, array('HS256'));

    $user = DB::table('users')->find($data->user_id);
    $responData = array("user"=>$user);
    return response()->json($responData, 200);
}

function updateinfo($id, Request $request){
    $name = $request->input('name');
    $email = $request->input('email');
    $image = $request->input('image');
    
    $user = User::where('id', $id)->first();

    $user->name = $name;
    $user->email = $email;
    $user->image = $image;
    $user->save();

    return $this->profile($id);
}


    function index(){
        $posts=DB::table('games')->get();
     return json_encode($posts);
    }
   function show($id){
       $post=DB::table('games')->where("id",$id)->get();
       return json_encode($post);
    }

   
//lay dl api tu react


function indexUser(){
    $posts=DB::table('users')->get();
 return json_encode($posts);
}
function showUser($id){
   $post=DB::table('users')->where("id",$id)->get();
   return json_encode($post);
}


function store(Request $request) {
    $name = $request->input('name');
    $email = $request->input('email');
    $password = $request->input('password');
    $image = $request->input('image');
    
    $hashPassword = Hash::make($password);

    DB::table("users")->insert([
            "name" => $name,
            "email" => $email,
            "password" => $hashPassword,
            "image"=>$image
    ]);

    $responseData = array("data"=>null);
    return response()->json($responseData, 200);
}

    function detail($id){
        $user = DB::table('games')->where('id',$id)->first();
        return $user;
    }

    function display()
    {
       
        $game = Game::all();

        return view('/admin/adminmanager', ["games" => $game]);
    }

    function displayUser()
    {
        
        $user = User::all();

        return view('/admin/usermanager', ["users" => $user]);
    }

    

    // ADMIN
    function formAdd() {
		return view('admin.add');
    }
    // function formAddUser() {
	// 	return view('admin.adduser');
	// }

	function formEdit($id) {
		$dataEdit = Game::find($id);
		return view('admin.edit', ['data' => $dataEdit]);
    }
    
    // function formEditUser($id) {
	// 	$dataEdit = User::find($id);
	// 	return view('admin.edituser', ['data' => $dataEdit]);
	// }

	function update(Request $request) {

		$id = $request->id;
		$game = Game::find($id);

		$game->name = $request->nameNew;
		$game->detail = $request->detailNew;
        $game->comment = $request->commentNew;
        $game->evaluate = $request->evaluateNew;


		$photo = $request->file('photoNew');
		
		
			$game->image = $photo->store("public");
			$game->save();
		
		return redirect("/admin/adminmanager");

    }
    
    // function updateUser(Request $request) {

	// 	$id = $request->id;
	// 	$user = User::find($id);

	// 	$user->name = $request->nameNew;
	// 	$user->email = $request->detailNew;
    //     $user->password = $request->passwordNew;
        


	// 	$photo = $request->file('photoNew');
		
		
	// 		$user->image = $photo->store("public");
	// 		$user->save();
		
	// 	return redirect("/admin/usermanager");

	// }

	function add_game(Request $request) {

		$game = new Game;

		$game->name = $request->name;
		$game->detail = $request->detail;
        $game->comment = $request->comment;
        $game->evaluate = $request->evaluate;

		
	
		$game->image = $request->file('photo')->store("public");

		$game->save();

		return redirect("/admin/adminmanager");

    }
    
    function add_user(Request $request) {

		$user = new User;

		$user->name = $request->name;
		$user->email = $request->email;
        $user->password = $request->password;
      
	
		$user->image = $request->file('photo')->store("public");

		$user->save();

		return redirect("/admin/adminmanager");

	}
	function delete($id) {

		$game = Game::find($id);
		$game->delete();
		echo "<script> alert('Xoa Thanh Cong');</script>";
		return redirect("/admin/adminmanager");
    }
    
    function deleteUser($id) {

		$user = User::find($id);
		$user->delete();
		echo "<script> alert('Xoa Thanh Cong');</script>";
		return redirect("/admin/usermanager");
	}


// USER


// function formAddUser() {
//     return view('admin.adduser');
// }

function formEditUser($id) {
    $dataEdit = User::find($id);
    return view('admin.edituser', ['data' => $dataEdit]);
}

function updateUser(Request $request) {

    $id = $request->id;
    $user = User::find($id);

    $user->name = $request->nameNew;
    $user->email = $request->emailNew;
    $user->password = $request->passwordNew;
    
    $photo = $request->file('photoNew');
    
        $user->image = $photo->store("public");
        $user->save();
    
    return redirect("/admin/usermanager");

}
  

}



    

