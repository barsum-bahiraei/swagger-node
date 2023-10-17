export class AllCategoryDto {
    id: number;
    title: string;
    parentId: string;
    path: string;
    children: Array<AllCategoryDto>
}