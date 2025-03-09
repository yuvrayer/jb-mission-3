import { 
    AllowNull, 
    BelongsTo, 
    Column, 
    DataType, 
    Default, 
    ForeignKey, 
    Model, 
    PrimaryKey, 
    Table 
} from "sequelize-typescript";
import Developing from "./developing";


@Table({
    underscored: true,
})
export default class Meeting extends Model{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string
    
    @ForeignKey(() => Developing)
    @AllowNull(false)
    @Column(DataType.UUID)
    developingId: string

    @AllowNull(false)
    @Column(DataType.UUID)
    meetingRoom: string

    @AllowNull(false)
    @Column(DataType.TEXT)
    description: string

    @AllowNull(false)
    @Column(DataType.DATE)
    startTime: Date

    @AllowNull(false)
    @Column(DataType.DATE)
    finishTime: Date

    @BelongsTo(() => Developing)
    developing: Developing

}
