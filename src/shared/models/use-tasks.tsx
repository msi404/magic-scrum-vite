import { useGetTasksQuery } from '@/shared/api/tasksApi'
import { useTable } from '@/shared/models/use-table'
import {useColumns} from '@/shared/models/use-columns'

export const useTasks = () =>
{
	const {columns} = useColumns()
	const { table } = useTable( [], columns )

	const { data } = useGetTasksQuery( {} )
	
	const result = data ?? []

	table.setOptions((prev) => ({
		...prev,
		data: result,
	} ) )
	return {
		table
	}
}