<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
</head>
    
    <title>User Managerment</title>
    <style>
     table{
       width: 900px;
       height: 100px;
     }
     th{
       background-color: yellow;
     }
     td{
       background-color: #e1f0f5;
     }
     body{
       background-color: #fff5eb;
     }
    
    </style>
</head>
<body>

<center> <h1>WELCOME TO VIT GAME WEBSITE</h1>
        <table border="1px;">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Email</th>
                <th>Password</th>
               
                <th>Add</th>
                <th>Delete</th>
                <th>Update</th>
                
               
            </tr>
            @foreach($users as $user)
            <tr>
                <td>{{$user -> id}}</td>
                <td>{{$user -> name}}</td>
                <td><img width="100px" height="100px" class="group list-group-image" src="{{'/storage/'.$user->image}}" alt="Card image cap"></td>
                <td>{{$user -> email}}</td>
                <td>{{$user -> password}}</td>
                
                <td>
                    <form action="/admin/adduser" >

                        <button type="submit" class="btn btn-danger">Add</button>

                    </form>
                </td>

                <td> <form action="/admin/deleteuser/{{$user->id}}" method="POST" accept-charset="utf-8">
									@csrf
									@method("DELETE")
									<button type="submit"> delete</button>
								</form></td>
                <td>
									<form action="/admin/edituser/{{$user->id}}" method="GET" accept-charset="utf-8">
										@csrf
										<button type="submit"> edit </button>
									</form>
								</td>

                
                
            </tr>
            @endforeach
        </table>
    </center>




</body>
</html>