
<div class="container-fluid mt-3">
   <h4 class="mb-2">Add User</h4><hr>
   <form action='/admin/adduser' method="POST" enctype="multipart/form-data">
     @csrf
     <div class="form-row">
      <label for="name">Name</label>
      <input type="text" class="form-control"
      id="name" name="name" placeholder="Tên game">
   </div>
   
      <div class="form-group col-sm-6">
         <label for="email">Email</label>
         <input type="tex" class="form-control"
         id="email" name="email" placeholder="email">
      </div>
   </div>
   <div class="form-group col-sm-6">
         <label for="pasword">Password</label>
         <input type="tex" class="form-control"
         id="pasword" name="pasword" placeholder="Pass">
      </div>
   </div>
   
   <div class="form-group">
      <label for="inputAddress">Image</label>
      <input type="file" class="form-control"
      id="myAddress" name="photo">
   </div>

   <button type="submit" class="btn btn-primary">Add</button>
</form>
</div>