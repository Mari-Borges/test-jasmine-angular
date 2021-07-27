import { UniqueServiceId } from './unique-id.service';


describe(UniqueServiceId.name, () =>{
    let service: UniqueServiceId = null
    beforeEach(()=> {
        service = new UniqueServiceId();
    })
    it(`#${UniqueServiceId.prototype.generateUniqueIdWithprefix.name}generate id when called with prefix`, () =>{
        const id = service.generateUniqueIdWithprefix('app');
        expect(id.startsWith('app-')).toBeTrue();

    });
    it(`#${UniqueServiceId.prototype.generateUniqueIdWithprefix.name}should not generate duplicate IDs when called multiple times`, () =>{
        const ids = new Set();
        for(let i = 0; i < 50; i++){
            ids.add(service.generateUniqueIdWithprefix('app'));

        }
        expect(ids.size).toBe(50);

    });
    it(`#${UniqueServiceId.prototype.getNumberOfGeneratedUniqueIds.name} should return the number of generatedIds when called`, () =>{
        service.generateUniqueIdWithprefix('app');
        service.generateUniqueIdWithprefix('app');
        expect(service.getNumberOfGeneratedUniqueIds()).toBe(2)

    })
    it(`#${UniqueServiceId.prototype.generateUniqueIdWithprefix.name} should throw when called with empty`, ()=> {
       const emptyValues = [null, undefined, '', '0', 'app']
       emptyValues.forEach(emptyValues => {
           expect (() => service.generateUniqueIdWithprefix(emptyValues))
           .withContext(`Emoty value: ${emptyValues}`).toThrow();
       });

    });
});
