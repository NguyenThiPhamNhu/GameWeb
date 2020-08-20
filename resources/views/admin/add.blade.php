<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css">
	<title>Edit infomation</title>
</head>
<body>

	<div>
		
	</div>
	<div class="container-fluid mt-3">
		<h4 class="mb-2" style="text-align: center">Edit Information</h4>
		<form action="/admin/add" method="post" enctype="multipart/form-data">
			@csrf
			<input type="text" name="id" hidden >
			<div class="form-row">
				<label for="name">Name Game</label>
				<input type="text" class="form-control"
				id="name" name="name" >
			</div>
			<div class="form-row">
				<div class="form-group col-sm-6">
					<label for="detail">Detail</label>
					<input type="text" class="form-control"
					id="detail" name="detail" >
				</div>
                <div class="form-group col-sm-6">
					<label for="comment">Comment</label>
					<input type="text" class="form-control"
					id="comment" name="comment" >
				</div>

                <div class="form-group col-sm-6">
					<label for="evaluate">Evaluate</label>
					<input type="text" class="form-control"
					id="evaluate" name="evaluate" >
				</div>
				

			</div>
			<div class="form-group">
				<label for="inputAddress">Image</label>
				<input type="file" class="form-control"
				id="file" name="photo" >
			</div>
			<button type="submit" class="btn btn-primary">Add</button>
		</form>
	</div>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
</body>

</body>
</html>