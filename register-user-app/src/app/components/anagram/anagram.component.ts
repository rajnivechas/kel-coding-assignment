import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

import { AnagramService } from '../anagram/anagram.service';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent implements OnInit {
  anagramForm: FormGroup;

  constructor(
    private _fb:FormBuilder, 
    private spinner: NgxSpinnerService,
    private toaster:ToastrService,
    private anagram: AnagramService
  ) { }

  ngOnInit(): void {

    this.initAnagramForm();
  }

  initAnagramForm(){
      
    this.anagramForm  = this._fb.group({     
      strOne:['', Validators.required],
      strTwo: ['', Validators.required]      
    })
  }
    checkAnagram(){
      this.spinner.show();     
      // call 'checkAnagram' from Anagram service
      let result = this.anagram.checkAnagram(this.anagramForm.value.strOne,this.anagramForm.value.strTwo);
   
      if(result){
            this.spinner.hide();    
            this.toaster.success('Congratulations! Entered string are Anagram.','Success!');
      }else {
        this.spinner.hide();
        this.toaster.warning('Sorry! Entered strings are not Anagram.','Warniing!');
      }


    }

}
