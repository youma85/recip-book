import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";
import {Recipe} from "../recipe";
import {FormArray, FormGroup, FormControl, Validators, FormBuilder,REACTIVE_FORM_DIRECTIVES} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-edit',
  templateUrl: 'recipe-edit.component.html',
  styles: [],
  directives:[REACTIVE_FORM_DIRECTIVES]
})
export class RecipeEditComponent implements OnInit,OnDestroy {
  recipeForm:FormGroup;
  private recipeIndex:number;
  private recipe:Recipe;
  private isNew=true;
  private subscription:Subscription;

  constructor(private route:ActivatedRoute,
              private rs:RecipeService,
              private formBuilder:FormBuilder,
              private router:Router) { }

  ngOnInit() {
    //récupérer le paramtre du recipe
    this.subscription=this.route.params.subscribe(

      (params:any)=>{
        //vérifier s'il y a un paramètre id alors cela veut dire que c'est une modification
        if(params.hasOwnProperty('id')){
          this.isNew=false;
          //le + pour qu'il marche pour le nimber
          this.recipeIndex=+params['id'];
          this.recipe=this.rs.getRecipe(this.recipeIndex);
        }else {
          this.isNew=true;
          this.recipe=null;
        }
        this.initForm();
      }
    );
  }
  
  onSubmit(){
    const newRecipe=this.recipeForm.value;
    if(this.isNew){
        this.rs.addRecipe(newRecipe);
    }else{
        this.rs.editRecipe(this.recipe,newRecipe);
    }
    this.navigateBack();
  }
  
  onCancel(){
    this.navigateBack();
  }
  
  onAddItem(name:String,amount:string){
    (<FormArray>this.recipeForm.controls['ingredients']).push(
        new FormGroup({
             name:new FormControl(name,Validators.required),
            amount:new FormControl(amount,[
              Validators.required,
              Validators.pattern("\\d+")
            ])
        })
    );
  }     
  
  onRemoveItem(index:number){
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }
  
  private navigateBack(){
    this.router.navigate(['../']);
  }

  private initForm(){
    let recipeName='';
    let recipeImageUrl='';
    let recipeContent='';
    let recipeIngrediens:FormArray=new FormArray([]);

    if(!this.isNew){
      for(let i=0;i<this.recipe.ingredients.length;i++){
        recipeIngrediens.push(
          new FormGroup({
            name:new FormControl(this.recipe.ingredients[i].name,Validators.required),
            amount:new FormControl(this.recipe.ingredients[i].amount,[
              Validators.required,
              Validators.pattern("\\d+")
            ])
          })
        );
      }

      recipeName=this.recipe.name;
      recipeImageUrl=this.recipe.imagePath;
      recipeContent=this.recipe.description;
      this.recipeForm=this.formBuilder.group({
        name:[recipeName,Validators.required],
        imagePath:[recipeImageUrl,Validators.required],
        description:[recipeContent,Validators.required],
        ingredients:recipeIngrediens
      });
    }

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
