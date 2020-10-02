import React, {Component} from "react";  
import $ from "jquery";

class List extends Component {
	constructor(){
        super();  
        this.state = {  
          itemm : [  
            {nama: "Learn React"},   
          ],    
          nama: "",  
          action: "" 
        }
	}
	
	bind = (event) => {  
		this.setState({[event.target.name]: event.target.value});
  	}  
	
  	SaveItemm = (event) =>{  
		event.preventDefault();  
		// temp digunakan untuk menyimpan sementara  
		// data array itemm  
		let temp = this.state.itemm;  
	
		if (this.state.action === "insert") {  
		  // temp akan ditambahkan dengan data itemm yang baru  
		  // sesuai dengan data yang dimasukkan pada form  
		  temp.push({  
				nama: this.state.nama,  
		  });  
		}  
	
		// array itemm diupdate dengan nilai data temp  
		this.setState({itemm: temp});  
	
		// menutup modal  
		// $("#modal").modal('hide');  
  	}  
	
  	Add = () => {
		// $("#modal").modal('show');  
		// mengosongkan nilai id dan nama  
		// pada saat tombol add ditekan  
		this.setState({    
	  		nama: "",  
	  		action: "insert"  
		});  
  	}  
	
  	Drop = (index) => {  
		// temp digunakan untuk menyimpan sementara  
		// data array itemm  
		let temp = this.state.itemm;  
	
		// menghapus data pada index yang dihapus  
		temp.splice(index,1);  
	
		// array itemm diupdate dengan nilai data temp  
		this.setState({itemm: temp});  
  	}
      
	render(){  
	    return (
            <div className="container">  
				<div className="card">
					<div className="card-header">
						<center><h2>Todos </h2></center>
					</div>
				</div>
	            { /* generate list */ }

				<center>
	            <button className="btn btn-sm btn-success m-3" onClick={this.Add}  
	            data-toggle="modal" data-target="#modal">  
	            Tambah List  
	            </button>
				</center>

	            <ul className="list-group">  
	            {this.state.itemm.map((item,index) => {  
	                return (  
	                <li className="list-group-item" key={index}>  
	                    <h5 className="text-info">{item.nama}</h5>      
  
	                    <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>  
	                    Hapus  
	                    </button>  
	                </li>  
	                );  
	            })}  
	            </ul>  
	  
	            { /* elemen form modal */ }  
	            <div className="modal fade" id="modal">  
	            <div className="modal-dialog">  
	                <div className="modal-content">  
	                <div className="modal-header bg-success text-white">  
	                    <h5>Form Penambahan List</h5>  
	                </div>  
	                <form onSubmit={this.SaveItemm}>  
	                <div className="modal-body">  
	                    Tambah To Do List 
	                    <input type="text" name="nama" className="form-control" onChange={this.bind}  
	                    value={this.state.nama} />    
	                </div>  
	                <div className="modal-footer"> 
	                    <button type="submit" className="btn btn-primary">  
	                    Simpan  
	                    </button>  
	                </div>  
	                </form>  
	                </div>  
	            </div>  
	            </div>  
	        </div>
	    );  
	}  
}

export default List;