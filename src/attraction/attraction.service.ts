import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attraction } from './entities/attraction.entity';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';

@Injectable()
export class AttractionService {
  constructor(
    @InjectRepository(Attraction)
    private attractionRepository: Repository<Attraction>,
  ) {}

  async create(createAttractionDto: CreateAttractionDto) {
    const attraction = await this.attractionRepository.create(createAttractionDto)
    const toCreate  = await this.attractionRepository.insert(attraction)
    return toCreate;
  }

  findAll() {
    return `This action returns all attraction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attraction`;
  }

  update(id: number, updateAttractionDto: UpdateAttractionDto) {
    return `This action updates a #${id} attraction`;
  }

  remove(id: number) {
    return `This action removes a #${id} attraction`;
  }
}
