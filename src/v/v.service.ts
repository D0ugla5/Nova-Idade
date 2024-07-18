import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVDto } from './dto/create-v.dto';
import { UpdateVDto } from './dto/update-v.dto';
import { privateDecrypt } from 'crypto';
import { V } from './entities/v.entity';

@Injectable()
export class VService {
    
    create(createVDto: CreateVDto){
      console.log("Passando pelo service");
  
      return {"massage": "API VEHICLE POST REQUEST"};
  }

  findAll() {
    console.log("Passando pelo service");
    return {"massage": "API VEHICLE GET REQUEST"};
  }
  update(id: number, updateVDto: UpdateVDto) {

    console.log("Passando pelo service");

     return {"message":"API VEHICLE PATCH REQUEST"};

  }

  remove(id: number) {

    console.log("Passando pelo service");

    return {"message":"API VEHICLE DELETE REQUEST"};
  }
}

                                          /* 1 - GET VEHICLE
                          Neste end-point deverá ser desenvolvida uma API do tipo GET, que ao ser requisitada, deverá retornar a seguinte mensagem;
                          {"message":"API VEHICLE GET REQUEST"}
                          
                          2 - POST VEHICLE
                          Neste end-point deverá ser desenvolvida uma API do tipo POST, que ao ser requisitada, deverá retornar a seguinte mensagem;
                          {"message":"API VEHICLE POST REQUEST"}
                          
                          3 - PATCH VEHICLE
                          Neste end-point deverá ser desenvolvida uma API do tipo PATCH, que ao ser requisitada, deverá retornar a seguinte mensagem;
                          {"message":"API VEHICLE PATCH REQUEST"}
                          
                          
                          4 - DELETE VEHICLE
                          Neste end-point deverá ser desenvolvida uma API do tipo DELETE, que ao ser requisitada, deverá retornar a seguinte mensagem;
                          {"message":"API VEHICLE DELETE REQUEST"}
                          
                          OBSERVAÇÕES IMPORTANTES:
                          - O CRUD deverá conter ao menos um módulo (ex.: vehicle)
                          - O CRUD deverá conter ao menos um service;
                          - O CRUD deverá conter ao menos um controller; */
 