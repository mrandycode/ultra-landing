import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HumanResourceService } from '@core/services/human-resource.service';
import {
  Profession,
  Skill,
} from '@core/human-resource/models/human-resource-model';
@Component({
  selector: 'app-human-resource',
  templateUrl: './human-resource.component.html',
  styles: [],
})
export class HumanResourceComponent implements OnInit {
  professions!: Profession[];
  skills!: Skill[] | undefined;
  skillSelected!: Skill;
  skillsSelected: Skill[] = [];
  humanResourceForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private humanResourceService: HumanResourceService
  ) {}

  ngOnInit(): void {
    this.builderForms();
    this.getProfessions();
  }

  builderForms(): void {
    this.humanResourceForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      genre: ['', [Validators.maxLength(1)]],
      mobile: ['', [Validators.maxLength(50)]],
      phone: ['', [Validators.maxLength(50)]],
      email: ['', [Validators.maxLength(64), Validators.email]],
      message: [''],
      profession: [0],
      mySkills: [[], [Validators.required]],
      country: ['', [Validators.required]],
    });
  }

  getProfessions(): void {
    this.humanResourceService.getProfessions().subscribe((response) => {
      this.professions = response;
      this.getSkills()
    });
  }

  getSkills(): void {
    this.skillsSelected = [];
    this.skills = this.professions.find(
      (profession) =>
        profession.id ===
        parseInt(this.humanResourceForm.get('profession')?.value, 10)
    )?.skills;
  }

  setMySkills(): void {
    if (this.skillsSelected.length < 3)
      this.skillsSelected.push(this.skillSelected);
  }

  deleteSkill(mySkill: Skill): void {
    const id = this.skillsSelected.findIndex(
      (skill) => skill.id === mySkill.id
    );
    this.skillsSelected.splice(id, 1);
  }

  sendCv(): void {
   
  }

  hasOutPut(event: any, nameColumn: string): void {
    if (nameColumn === 'mobile') {
      this.humanResourceForm.patchValue({ mobile: event });
    } else {
      this.humanResourceForm.patchValue({ phone: event });
    }
  }

  hasError(event: any): void {
    if (!event && this.humanResourceForm.value.phone !== '') {
      this.humanResourceForm
        .get('phone')!
        .setErrors(['invalid_cell_phone', true]);
    }
  }
}
