import { 
    AllowNull, 
    Column, 
    DataType, 
    Default, 
    HasMany, 
    Model, 
    PrimaryKey, 
    Table 
} from "sequelize-typescript";
import Meeting from "./meeting";


@Table({
    underscored: true,
})
export default class Developing extends Model{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string
    
    @AllowNull(false)
    @Column(DataType.TEXT)
    name: string

    @HasMany(() => Meeting)
    meeting: Meeting

}
