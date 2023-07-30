import {withInstall, withNoopInstall} from '@/utils'
import Form from './src/xx-form.vue'
import FormItem from './src/xx-form-item.vue'

export const ElForm = withInstall(Form, {
    FormItem,
})
export default ElForm
export const ElFormItem = withNoopInstall(FormItem)

export * from './src/form'
export * from './src/form-item'
export * from './src/types'
export * from './src/constants'
export * from './src/hooks'

export type FormInstance = InstanceType<typeof Form>
export type FormItemInstance = InstanceType<typeof FormItem>
