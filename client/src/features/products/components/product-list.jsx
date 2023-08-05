import { DataTable } from "@components/data-table"
import { Avatar, Box, Checkbox, IconButton, TableCell, TableRow } from "@mui/material";
import { useMemo, useState } from "react"
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { ConfirmDialog } from "@components/confirm-dialog";
import { useSnackbar } from "notistack";
import { API_URL } from "../../../app/config";

export const ProductList = () => {

    const headCells = useMemo(() => [
        {
            id: 'name',
            align: "left",
            disableSort: false,
            label: 'Tên sản phẩm',
        },
        {
            id: 'imageUrl',
            align: "left",
            disableSort: true,
            label: 'Hình ảnh',
        },
        {
            id: 'price',
            align: "right",
            disableSort: false,
            label: 'Giá',
        },
        {
            id: 'actions',
            align: "right",
            disableSort: true,
            label: 'Thao tác',
        },
    ], []);

    const searchOptions = useMemo(() => [
        {
            value: 'name',
            name: "Tên sản phẩm",
        },
        {
            value: 'imageUrl',
            name: "Hình ảnh",
        },
        {
            value: 'price',
            name: "Giá",
        },
    ], []);

    // const { 
    //     originalList, categoryList, 
    //     setCategoryList, deleteIdInList,
    //     deleteIdsInList,
    // } = useCategoryList();

    // const { deleteCategory, deleteMultipleCategories } = useCategoryCrud();

    // const [ deleteDialog, setDeleteDialog] = useState({
    //     isOpen: false,
    //     id: "",
    // });

    // const { enqueueSnackbar } = useSnackbar();

    // const closeDeleteDialog = () => {
    //     setDeleteDialog(prevState => ({
    //         ...prevState,
    //         isOpen: false,
    //     }));
    // }

    // const handleDeleteDialogClose = () => {
    //     closeDeleteDialog();
    // }

    // const handleDialogConfirm = async () => {

    //     const resData = await deleteCategory(deleteDialog.id);
    //     if (!resData.isSuccess) {
    //         closeDeleteDialog();
    //         enqueueSnackbar(resData.response.message, { variant: 'error' });

    //         return;
    //     }

    //     deleteIdInList(deleteDialog.id)

    //     closeDeleteDialog();
    //     enqueueSnackbar("Xóa thành công", { variant: 'success' });
    // }

    // const handleDeleteMultiple = async (ids) => {

    //     const resData = await deleteMultipleCategories({
    //         ids: ids,
    //     });
    //     if (!resData.isSuccess) {
    //         closeDeleteDialog();
    //         enqueueSnackbar(resData.response.message, { variant: 'error' });

    //         return;
    //     }

    //     deleteIdsInList(ids);

    //     closeDeleteDialog();
    //     enqueueSnackbar("Xóa thành công", { variant: 'success' });
    // }

    // const renderRows = (idField, visibleRows, emptyRows, isSelected, handleSelect) => {
    //     return (
    //         <>
    //             {visibleRows.map((row, index) => {
    //                 const isItemSelected = isSelected(row[idField]);
    //                 const labelId = `enhanced-table-checkbox-${index}`;

    //                 return (
    //                     <TableRow
    //                         hover
    //                         aria-checked={isItemSelected}
    //                         tabIndex={-1}
    //                         key={row[idField]}
    //                         selected={isItemSelected}
    //                         sx={{ cursor: 'pointer' }}
    //                     >
    //                         <TableCell padding="checkbox">
    //                             <Checkbox
    //                                 color="primary"
    //                                 onClick={(event) => handleSelect(event, row[idField])}
    //                                 checked={isItemSelected}
    //                                 inputProps={{
    //                                     'aria-labelledby': labelId,
    //                                 }}
    //                             />
    //                         </TableCell>
    //                         <TableCell
    //                             component="th"
    //                             id={labelId}
    //                             scope="row"
    //                             padding="none"
    //                         >
    //                             {row.name}
    //                         </TableCell>
    //                         <TableCell align="left">
    //                             <Avatar alt="image" src={`${API_URL}${row.imageUrl}`} />
    //                         </TableCell>
    //                         <TableCell align="right">
    //                             <Box sx={{}}>
    //                                 <IconButton color="primary" component={Link} to={`edit/${row.id}`}>
    //                                     <ModeEditIcon />
    //                                 </IconButton>
    //                                 <IconButton onClick={() => setDeleteDialog({
    //                                     isOpen: true,
    //                                     id: row.id,
    //                                 })}
    //                                     sx={{ color: pink[500] }}>
    //                                     <DeleteIcon />
    //                                 </IconButton>
    //                             </Box>
    //                         </TableCell>
    //                     </TableRow>
    //                 );
    //             })}
    //             {emptyRows > 0 && (
    //                 <TableRow
    //                     style={{
    //                         height: (53) * emptyRows,
    //                     }}
    //                 >
    //                     <TableCell colSpan={headCells.length} />
    //                 </TableRow>
    //             )}
    //         </>
    //     )
    // }

    return (
        <>
            {/* <DataTable
                idField="id"
                title="Loại hàng"
                headCells={headCells}
                rows={categoryList}
                originalRows={originalList}
                searchOptions={searchOptions}
                renderRows={renderRows}
                setRowData={setCategoryList}
                onDeleteMultiple={handleDeleteMultiple}
            />
            <ConfirmDialog
                title="Xóa loại hàng"
                content="Bạn có chắc muốn là muốn xóa loại hàng này ?"
                open={deleteDialog.isOpen}
                handleClose={handleDeleteDialogClose}
                onConfirm={handleDialogConfirm}
            /> */}
        </>
    )
}