import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 1, name: 'Salman', email: 'salman@gmail.com', weapon: 'stars' },
    { id: 2, name: 'Kim', email: 'salman@gmail.com', weapon: 'katana' },
  ];
  create(createNinjaDto: CreateNinjaDto) {
    const newNinja = {
      ...createNinjaDto,
      id: Date.now(),
    };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  findAll() {
    return this.ninjas;
  }

  findFiltered(weapon: string) {
    return this.ninjas.filter((ninja) => ninja.weapon === weapon);
  }

  findOne(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if (!ninja) {
      throw new Error('Ninja not found');
    }
    return ninja;
  }

  update(id: number, updateNinjaDto: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if ((ninja.id = id)) {
        return { ...ninja, ...updateNinjaDto };
      }
      return ninja;
    });
    return this.findOne(id);
  }

  remove(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if (!ninja) {
      throw new Error('Ninja not found');
    }
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);
    return { message: 'success' };
  }
}
