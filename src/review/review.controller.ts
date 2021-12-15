import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudAuth, CrudController } from '@nestjsx/crud';
import { AccessTokenPayload } from 'auth/interfaces/auth.interface';
import { Review } from './review.entity';
import { ReviewService } from './review.service';

@ApiTags('review')
@Controller('reviews')
@Crud({
    model: {
        type: Review
    },
    params: {
        id: {
            field: 'id',
            type: 'number',
            primary: true
        }
    }
})
@CrudAuth({
    property: 'user',
    persist: (user: AccessTokenPayload) => ({
        userId: +user.sub,
    }),
})
@Controller('review')
export class ReviewController implements CrudController<Review> {
    constructor(public service: ReviewService) {}
}