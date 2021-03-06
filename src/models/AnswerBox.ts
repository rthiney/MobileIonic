/**
 * SurgiPal API
 * API to Access SurgiPal Data
 *
 * OpenAPI spec version: v1
 * Contact: raphael.thiney@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
import * as models from './';

export interface AnswerBox {
    

    id?: number;

    cardId?: number;

    doctorId?: number;

    respondedId?: number;

    name?: string;

    createdAt?: Date;

    hospitalId?: number;

    parentSnapshotId?: number;

    surgerySnapshot?: number;

    cpt?: string;

    diagnosisCode?: string;

    answer?: Array<models.Answer>;

    answerSuggested?: Array<models.AnswerSuggested>;

    attachment?: Array<models.Attachment>;

    surgery?: Array<models.Surgery>;

    card?: models.Card;

    doctor?: models.FosUser;

    hospital?: models.FosUser;

    parentSnapshot?: models.AnswerBox;

    inverseParentSnapshot?: Array<models.AnswerBox>;

    responded?: models.FosUser;
}
