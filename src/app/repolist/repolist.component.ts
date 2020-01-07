import { Component, OnInit } from '@angular/core';
import { RepoDetailsService } from '../services/repo-details.service'
@Component({
  selector: 'app-repolist',
  templateUrl: './repolist.component.html',
  styleUrls: ['./repolist.component.css']
})
export class RepolistComponent implements OnInit {

  updateDate = "9 january";
  repolist = [];
  searchRepository = '';
  repoType = 'all';
  repoLanguage = 'all';
  repolanguageAvl = [];
  repoListAll = [];
  constructor(private repodetails: RepoDetailsService) { }

  ngOnInit( ) {
    this.repodetails.getRepoList().subscribe(data => {

      this.sortData(data)
     
    });
  }

  sortData(values){
   this.repolist = values.sort((a, b) => {
      if (b.updated_at < a.updated_at) return -1;
      else if (b.updated_at > a.updated_at) return 1;
      else return 0;
    });
    this.repoListAll = this.repolist;
    this.extractLanguages(this.repolist);
  }
  extractLanguages(repolist){
    for(let repo of repolist)
    {
      if(repo.language != null){
          this.repolanguageAvl.push(repo.language)
      }

    } 
    let uniqueSet = new Set(this.repolanguageAvl);
    let backtoarray = [...uniqueSet];
    this.repolanguageAvl = backtoarray;
    
  }
  filterData(){
    if(this.repoType != 'all' && this.repoLanguage != 'all'){
      let newList = this.repoListAll.filter( o => 
        o[this.repoType] == true && o.language == this.repoLanguage
      ) ;
      this.repolist = newList; 
    }
    else if(this.repoType == 'all' && this.repoLanguage != 'all'){
      let newList = this.repoListAll.filter( o => 
        o.language == this.repoLanguage
      );
      console.log(newList);
      this.repolist = newList; 
    }
    else if(this.repoType != 'all' && this.repoLanguage == 'all'){
      if(this.repoType == 'public'){
        let newList = this.repoListAll.filter( o => 
          o.private == false
        );
        this.repolist = newList;
      }
      else{
        let newList = this.repoListAll.filter( o => 
          o[this.repoType] == true
        );
        this.repolist = newList; 
      }
      
    }
    else if(this.repoType == 'all' && this.repoLanguage == 'all'){
      this.repolist = this.repoListAll;
    }
  }
  
}
