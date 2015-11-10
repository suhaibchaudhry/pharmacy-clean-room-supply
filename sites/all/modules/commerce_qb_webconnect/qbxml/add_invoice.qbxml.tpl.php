<InvoiceAddRq requestID="c-<?php print $order_id ?>">
  <InvoiceAdd>
    <CustomerRef>
      <FullName><?php print $last_name . ', ' . $first_name ?></FullName>
    </CustomerRef>
    <TxnDate><?php print $date ?></TxnDate>
    <RefNumber>c-<?php print $order_id ?></RefNumber>
  <BillAddress>
    <Addr1><?php print $billing_address['thoroughfare'] ?></Addr1>
    <Addr2><?php print $billing_address['premise'] ?></Addr2>
    <Addr3><?php print $billing_address['sub_premise'] ?></Addr3>
    <City><?php print $billing_address['locality'] ?></City>
    <State><?php print $billing_address['administrative_area'] ?></State>
    <PostalCode><?php print $billing_address['postal_code'] ?></PostalCode>
    <Country><?php print $billing_address['country'] ?></Country>
  </BillAddress>    
  <?php if ($shipping_address): ?>
    <ShipAddress>
      <Addr1><?php print $shipping_address['thoroughfare'] ?></Addr1>
      <Addr2><?php print $shipping_address['premise'] ?></Addr2>
      <Addr3><?php print $shipping_address['sub_premise'] ?></Addr3>
      <City><?php print $shipping_address['locality'] ?></City>
      <State><?php print $shipping_address['administrative_area'] ?></State>
      <PostalCode><?php print $shipping_address['postal_code'] ?></PostalCode>
      <Country><?php print $shipping_address['country'] ?></Country>
    </ShipAddress>
  <?php endif; ?> 
  <?php if ($tax_type): ?>
  <ItemSalesTaxRef>
    <FullName><?php print $tax_type ?></FullName>
  </ItemSalesTaxRef>
  <?php endif; ?>        
  <?php if ($products): ?>
    <?php foreach ($products as $product): ?>
      <InvoiceLineAdd>
        <ItemRef>
          <FullName><?php print $product['sku'] ?></FullName>
        </ItemRef>
        <Desc><?php print $product['title'] ?></Desc>
        <Quantity><?php print $product['quantity'] ?></Quantity>
        <Rate><?php print $product['price'] ?></Rate>          
      </InvoiceLineAdd>
    <?php endforeach; ?>    
    <?php if ($shipping): ?>
    <InvoiceLineAdd>
      <ItemRef>
        <FullName><?php print $shipping['service'] ?></FullName>
      </ItemRef>
      <Desc><?php print $shipping['description'] ?></Desc>
      <Quantity><?php print $shipping['quantity'] ?></Quantity>
        <?php if ($tax_type): ?>
          <ItemSalesTaxRef>
            <FullName><?php print $tax_type ?></FullName>
          </ItemSalesTaxRef>
        <?php endif; ?>            
      <Rate><?php print $shipping['rate'] ?></Rate>
    </InvoiceLineAdd>   
    <?php endif; ?>    
  <?php endif; ?>
  </InvoiceAdd>
</InvoiceAddRq>
