import {TestBed} from '@angular/core/testing';

import {StorageService} from './storage.service';
import {IProject, Project} from '../shared/model/project';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('local storage', () => {
    it('is empty', () => {
      // prepare a local storage
      window.localStorage.removeItem(StorageService.LS_KEY);

      const projects = service.load();
      expect(projects).toEqual([]);
    });

    it('save', () => {
      const projects: Array<IProject> = [
        new Project(1, 'title 1'),
        new Project(2, 'title 2'),
        new Project(3, 'title 3'),
      ];
      service.save(projects);

      const item = window.localStorage.getItem(StorageService.LS_KEY);
      expect(item).not.toBeNull();
    });

    it('load', () => {
      // prepare a local storage
      window.localStorage.removeItem(StorageService.LS_KEY);

      const projects: Array<IProject> = [
        new Project(1, 'title 1'),
      ];
      service.save(projects);
      const loadedProjects = service.load();
      expect(loadedProjects).toEqual(projects);
    });
  });

});
